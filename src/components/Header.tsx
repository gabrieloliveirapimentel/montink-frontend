import logoImg from "../assets/store01.svg";

export function Header() {
  return (
    <header className="border-b-2 border-gray-200">
      <div className="flex flex-row gap-4 p-6 bg-gray-50">
        <img src={logoImg} alt="Logo" className="w-12" />
        <div>
          <h3 className="text-orange-600">Montink Marketplace</h3>
          <span className="text-orange-600">A sua loja favorita!</span>
        </div>
      </div>
    </header>
  );
}
