import React from 'react';
import Link from "next/link";
import {buttonVariants} from "@/components/ui/button";


const UserMenu = () => {
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