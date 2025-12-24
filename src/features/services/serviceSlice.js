import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { name: "Buy Software", logo: "/assets/logo6.png" },
  { name: "Software Testing", logo: "/assets/logo5.png" },
  { name: "Golang Testing", logo: "/assets/logo4.png" },
  { name: "Python unittest", logo: "/assets/pythonlogo.png" },
  { name: "RTSP Streaming", logo: "/assets/logo4.png" },
  { name: "Hikvision SDK", logo: "/assets/logo3.png" },
  { name: "Embedded & Others", logo: "/assets/logo2.png" },
];

const serviceSlice = createSlice({
  name: "services",
  initialState,
  reducers: {},
});

export default serviceSlice.reducer;
