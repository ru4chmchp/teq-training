import { useState } from "react";
import { TextField, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Xử lý tìm kiếm ở đây (ví dụ: gọi API hoặc lọc dữ liệu)
    console.log("Searching for:", searchTerm);
  };

  return (
    <form
      onSubmit={handleSearchSubmit}
      className="flex items-center w-[50%] justify-center relative"
    >
      <TextField
        variant="outlined"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
        size="small"
        className="flex-grow ml-10"
        InputProps={{
          style: { paddingLeft: "20px" }, // Điều chỉnh khoảng cách trái
        }}
      />

      <div className="absolute top-0 left-0">
        <IconButton type="submit" color="primary">
          <SearchIcon />
        </IconButton>
      </div>
    </form>
  );
};

export default SearchBar;
