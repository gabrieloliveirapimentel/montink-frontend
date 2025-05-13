import logoImg from "../assets/store01.svg";

export function Header() {
  return (
    <header className="border-b-2 border-[#F5EAEA]">
      <div className="flex flex-row gap-4 p-6 bg-[#FBF4F4]">
        <img src={logoImg} alt="Logo" className="w-12" />
        <div>
          <h3 className="">Montink Marketplace</h3>
          <span>A sua loja favorita!</span>
        </div>
      </div>
    </header>
  );
}
