import React, {Dispatch, SetStateAction} from 'react';
import Link from "next/link";
import {buttonVariants} from "@/components/ui/button";

interface AuthStateProps {
  isLogined: boolean;
  setIsLogined: Dispatch<SetStateAction<boolean>>;
}

const UserMenu = ({isLogined, setIsLogined}: AuthStateProps) => {
  return (
    <div className="flex justify-end gap-4">
      {
        <>
          <Link className={ buttonVariants({variant: 'outline'}) + " font-medium !h-8 !hidden lg:block"} href="#">Войти</Link>
          <Link className={buttonVariants({variant: 'default'}) + " font-medium !h-8"} href="#">Регистрация</Link>
        </>
      }

    </div>
  );
};

export default UserMenu;