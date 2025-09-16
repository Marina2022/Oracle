import Link from "next/link";
import ToggleTheme from './ToggleTheme';
import UserMenu from "@/components/layout/header/UserMenu";
import Logo from "@/components/shared/Logo";
import ToggleLang from "@/components/layout/header/ToggleLang";
import {Menu} from "lucide-react"

const Header = async () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border glassmorphism">
      <div className="container px-4 py-4 flex items-center justify-between ">
        <Link href="/">
          <Logo/>
        </Link>
        <div className="hidden lg:flex items-center space-x-10">
          <Link href="#models" className="text-foreground hover:text-primary transition-colors">
            Модели ИИ
          </Link>
          <Link href="#working-process" className="text-foreground hover:text-primary transition-colors">
            Как работает
          </Link>
          <Link href="#predictions" className="text-foreground hover:text-primary transition-colors">
            Прогнозы
          </Link>
          <Link href="#prices" className="text-foreground hover:text-primary transition-colors">
            Цены
          </Link>
        </div>
        <div className="flex gap-4 items-center">
          <ToggleTheme/>
          <ToggleLang/>
          <UserMenu/>
          <Menu className="inline lg:hidden "/>
        </div>
      </div>
    </nav>
  );
};

export default Header;