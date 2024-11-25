import { CartCounter } from "@/app/shopping-cart";

export const metadata = {
  title: 'Counter App',
  descriCounter: 'componente del lado del cliente',
 };

export default function CounterPage() {

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el Carrito</span>
      <CartCounter/>
    </div>
  );
}