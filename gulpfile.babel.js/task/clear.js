// Configurations
import path from "../config/path.js";

// Plugins
import del from "del";

// Delete directory
const clear = () => {
  return del(path.root)
}

export default clear