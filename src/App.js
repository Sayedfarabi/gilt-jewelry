import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";

function App() {
  return (
    <section className='max-w-[1440px] mx-auto'>
      <RouterProvider router={routes} />
    </section>
  );
}

export default App;
