import React, { useState } from "react";
import { Paper, InputBase, IconButton, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface Props {
  onSearch: (city: string) => void;
}

const SearchBar: React.FC<Props> = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) onSearch(input);
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        p: "12px 16px",
        display: "flex",
        alignItems: "center",
        mb: 4,
        borderRadius: 3,
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        background: "linear-gradient(to right, #f5f7fa, #ffffff)",
        "&:focus-within": {
          boxShadow: "0 6px 20px rgba(102, 126, 234, 0.15)",
        },
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1, fontSize: "1rem" }}
        placeholder="Buscar ciudad (ej: Madrid, Tokyo...)"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <IconButton
        type="submit"
        sx={{
          p: "8px",
          color: "#667eea",
          "&:hover": { background: "rgba(102, 126, 234, 0.1)" },
        }}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
