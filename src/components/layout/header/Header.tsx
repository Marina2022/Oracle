import Link from "next/link";
import ToggleTheme from './ToggleTheme';
import UserMenu from "@/components/layout/header/UserMenu";
import Logo from "@/components/shared/Logo";
import ToggleLang from "@/components/layout/header/ToggleLang";

const Header = async () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border ">
      <div className="container px-4 py-4 flex items-center justify-between ">

        <Link href="/">
          <Logo/>
        </Link>
        <div className="hidden md:flex items-center space-x-10">
          <Link href="#" className="text-foreground hover:text-primary transition-colors">
            Модели ИИ
          </Link>
          <Link href="#" className="text-foreground hover:text-primary transition-colors">
            Как работает
          </Link>
          <Link href="#" className="text-foreground hover:text-primary transition-colors">
            Прогнозы
          </Link>
          <Link href="#" className="text-foreground hover:text-primary transition-colors">
            Цены
          </Link>
        </div>
        <div className="flex gap-4 items-center">
          <ToggleTheme/>
          <ToggleLang/>
          <UserMenu/>
        </div>
      </div>
    </nav>
  );
};

export default Header;