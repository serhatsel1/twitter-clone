import { Popover } from "@headlessui/react";
import { useAccount, useAccounts } from "../../../../../store/auth/hooks";
import classNames from "classnames";
import setCurrentAccount from "../../../../../store/auth/actions";

const More = () => {
  const accounts = useAccounts();
  const currentAccount = useAccount();
  console.log(accounts);

  return (
    <>
      <div className="mt-auto">
        {accounts.map((account) => (
          <div key={account}>
            <button
            type="button"
            onClick={() => (setCurrentAccount(account))}
            disabled={ currentAccount.id === account.id}
              className={classNames(
                "my-3 p-3  w-full  flex text-left outline-none",
                {
                  "hover:bg-[#eff3f41a]": currentAccount.id !== account.id,
                }
              )}
            >
              <img
                src={account.avatar}
                alt={account.fullName}
                className="w-10 h-10 rounded-full flex"
              />
              <div className="mx-3 text-[15px] ">
                <h6 className="font-bold leading-[20px]">{account.fullName}</h6>
                <div className="text-[#71767b]">@{account.userName}</div>
              </div>
            </button>
          </div>
        ))}
        <div className="h-px bg-gray-700 my-3" />
        <button className="py-4 px-3 text-left hover:bg-[#eff3f41a] font-bold w-full text-[15px]">
          Var olan bir hesap ekle
        </button>
        <button className="pt-4 pb-6 px-3 text-left hover:bg-[#eff3f41a] font-bold w-full text-[15px]">
          @{currentAccount.fullName} Hesaptan çıkış yap
        </button>
      </div>
    </>
  );
};

export default More;
