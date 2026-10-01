import { useEffect, useContext, useState } from "react";
import { Box, Button, InputLabel, Typography, FormControl, Select, MenuItem } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Dynamicinput from "../../Components/Dynamicinput";
import { toBase64 } from "../../hooks/utils/helper";
import ProductContext from "../../hooks/context/product/ProductProvider";

const CATEGORY_OPTIONS = [
  "Indian",
  "Mexican",
  "Italian",
  "Chinese",
  "Japanese",
  "American",
  "Thai",
  "French",
];

const RATING_OPTIONS = [1, 2, 3, 4, 5];

const schema = yup.object().shape({
  title: yup
    .string()
    .required("Product name is required")
    .matches(/^[A-Za-z0-9\s]+$/, "Only letters, numbers & spaces allowed"),
  price: yup
    .number()
    .typeError("Price must be a number")
    .positive("Price must be greater than 0")
    .required("Price is required"),
  description: yup
    .string()
    .required("Description is required")
    .min(10, "Description should be at least 10 characters"),
  category: yup.string().required("Category is required"),
  publish: yup.boolean().required("Publish status is required"),
  rating: yup
    .number()
    .typeError("Rating must be a number")
    .min(1, "Minimum rating is 1")
    .max(5, "Maximum rating is 5")
    .required("Rating is required"),
});

const AddProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { addProduct, updateProduct, products, getProducts } =
    useContext(ProductContext);

  const [preview, setPreview] = useState(null); 

  const {
    handleSubmit,
    reset,
    setValue,
    control,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      title: "",
      description: "",
      category: "",
      price: "",
      image: null,
      publish: true,
    },
  });

  useEffect(() => {
    if (id) {
      if (products.length === 0) {
        getProducts();
      }
      const product = products.find((p) => String(p.id) === String(id));
      if (product) {
        reset(product);
        if (product.image) {
          setPreview(product.image); 
        }
      }
    }
  }, [id, products, reset, getProducts]);

  const onSubmit = async (data) => {
    console.log("Add Product");
    
    try {
      let base64img = "";
      if (data.image && data.image instanceof File) {
        base64img = await toBase64(data.image);
      }

      const finalData = {
        title: data.title,
        description: data.description,
        category: data.category,
        price: data.price,
        rating: data.rating, 
        image: base64img || data.image || null,
        wishlist: false,
        publish: data.publish,
      };

      if (id) {
        await updateProduct(id, finalData);
        toast.success("✅ Product Updated Successfully");
      } else {
        await addProduct(finalData);
        toast.success("✅ Product Added Successfully");
      }

      navigate("/admin/product");
    } catch (error) {
      console.error("Error saving product:", error);
      toast.error("Failed to save product");
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue("image", file, { shouldValidate: true });
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result); 
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        backgroundColor: "#dbe0e4ff",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        p: 2,
        borderRadius: 2,
      }}
    >
      <Typography variant="h5" mb={2}>
        {id ? "Update Product" : "Add New Product"}
      </Typography>

      <Dynamicinput
        name="title"
        label="Product Name"
        control={control}
        errors={errors}
      />

      <Dynamicinput
        name="description"
        label="Description"
        control={control}
        errors={errors}
        multiline
        rows={3}
      />

      {/* Category Dropdown */}
      <FormControl fullWidth size="small" error={!!errors.category}>
        <InputLabel>Category</InputLabel>
        <Select
          label="Category"
          value={watch("category")}
          onChange={(e) => setValue("category", e.target.value, { shouldValidate: true })}
        >
          {CATEGORY_OPTIONS.map((cat) => (
            <MenuItem key={cat} value={cat}>
              {cat}
            </MenuItem>
          ))}
        </Select>
        {errors.category && (
          <Typography color="error" variant="body2">
            {errors.category.message}
          </Typography>
        )}
      </FormControl>

      {/* Rating Dropdown */}
      <FormControl fullWidth size="small" error={!!errors.rating}>
        <InputLabel>Rating</InputLabel>
        <Controller
          name="rating"
          control={control}
          render={({ field }) => (
            <Select
              label="Rating"
              value={field.value || ""}
              onChange={(e) => field.onChange(Number(e.target.value))}
            >
              {RATING_OPTIONS.map((rate) => (
                <MenuItem key={rate} value={rate}>
                  {rate}
                </MenuItem>
              ))}
            </Select>
          )}
        />
        {errors.rating && (
          <Typography color="error" variant="body2">
            {errors.rating.message}
          </Typography>
        )}
      </FormControl>

      <Dynamicinput
        name="price"
        label="Price"
        control={control}
        errors={errors}
      />

      {/* Publish Dropdown */}
      <FormControl fullWidth size="small" error={!!errors.publish}>
        <InputLabel>Publish</InputLabel>
        <Select
          label="Publish"
          value={watch("publish")}
          onChange={(e) => setValue("publish", e.target.value === "true" || e.target.value === true, { shouldValidate: true })}
        >
          <MenuItem value={true}>Yes</MenuItem>
          <MenuItem value={false}>No</MenuItem>
        </Select>
        {errors.publish && (
          <Typography color="error" variant="body2">
            {errors.publish.message}
          </Typography>
        )}
      </FormControl>

      <Box sx={{ mt: 2 }}>
        <InputLabel>Product Image</InputLabel>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        {errors.image && (
          <Typography color="error" variant="body2">
            {errors.image.message}
          </Typography>
        )}
      </Box>

      {preview && (
        <Box
          sx={{
            mt: 2,
            border: "1px solid #ccc",
            borderRadius: 2,
            p: 1,
            maxWidth: 200,
            textAlign: "center",
          }}
        >
          <img
            src={preview}
            alt="Preview"
            style={{ width: "100%", borderRadius: "8px" }}
          />
          <Typography variant="body2" mt={1}>
            Preview
          </Typography>
        </Box>
      )}

      <Button type="submit" variant="contained" color="primary">
        {id ? "Update" : "Save"}
      </Button>
    </Box>
  );
};

export default AddProduct;
