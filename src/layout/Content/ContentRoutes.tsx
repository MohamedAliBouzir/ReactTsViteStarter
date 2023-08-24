import { Route, Routes } from "react-router-dom"
import contents from "../../routes/contentRoutes"
const ContentRoutes = () => {
  return (
        <Routes>
            {contents.map((page)=>(
                <Route key={page.path} {...page} />
            ))}
        </Routes>
  );
};

export default ContentRoutes
