import { Popover, Disclosure } from "@headlessui/react";
import { Link } from "react-router-dom";

const More = () => {
  return (
    <Popover className="relative outline-none">
      <Popover.Button className="py-1 block-group">
        <div className="p-3 rounded-full inline-flex items-center gap-5  hover:bg-[#eff3f41a] transition-colors">
          <div className="w-[26.25px] h-[26.25px] relative">
            <svg className="h-[52px]">
              <path
                fill="#fff"
                d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z"
              />
            </svg>
          </div>
          <div className="pr-4 text-xl">Daha fazla</div>
        </div>
      </Popover.Button>

      <Popover.Panel className="w-[318px] absolute bottom-0 left-0 bg-black shadow-box rounded-xl overflow-hidden">
        <button className="p-3 h-14 w-full  inline-flex items-center gap-5  hover:bg-[#eff3f41a] transition-colors">
          <div className="w-[26.25px] h-[26.25px] ">
            <svg className="h-[52px]">
              <path
                fill="#fff"
                d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
              />
            </svg>
          </div>
          <div className="pr-4 text-xl">Onaylanmış</div>
        </button>
        <button className="p-3 h-14 w-full  inline-flex items-center gap-5  hover:bg-[#eff3f41a] transition-colors">
          <div className="w-[26.25px] h-[26.25px] ">
            <svg className="h-[52px]">
              <path
                fill="#fff"
                d="M7.501 19.917L7.471 21H.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977.963 0 1.95.212 2.87.672-.444.478-.851 1.03-1.212 1.656-.507-.204-1.054-.329-1.658-.329-2.767 0-4.57 2.223-4.938 6.004H7.56c-.023.302-.05.599-.059.917zm15.998.056L23.528 21H9.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977s6.816 2.358 7 8.977zM21.437 19c-.367-3.781-2.17-6.004-4.938-6.004s-4.57 2.223-4.938 6.004h9.875zm-4.938-9c-.799 0-1.527-.279-2.116-.73-.836-.64-1.384-1.638-1.384-2.77 0-1.93 1.567-3.5 3.5-3.5s3.5 1.57 3.5 3.5c0 1.132-.548 2.13-1.384 2.77-.589.451-1.317.73-2.116.73zm-1.5-3.5c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5-.673-1.5-1.5-1.5-1.5.673-1.5 1.5zM7.5 3C9.433 3 11 4.57 11 6.5S9.433 10 7.5 10 4 8.43 4 6.5 5.567 3 7.5 3zm0 2C6.673 5 6 5.673 6 6.5S6.673 8 7.5 8 9 7.327 9 6.5 8.327 5 7.5 5z"
              />
            </svg>
          </div>
          <div className="pr-4 text-xl">Topluluk</div>
        </button>
        <button className="p-3 h-14 w-full  inline-flex items-center gap-5  hover:bg-[#eff3f41a] transition-colors">
          <div className="w-[26.25px] h-[26.25px] ">
            <svg className="h-[52px]">
              <path
                fill="#fff"
                d="M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z"
              />
            </svg>
          </div>
          <div className="pr-4 text-xl">Para Kazanma</div>
        </button>
        <button className="p-3 h-14 w-full  inline-flex items-center gap-5  hover:bg-[#eff3f41a] transition-colors">
          <div className="w-[26.25px] h-[26.25px] ">
            <svg className="h-[52px]">
              <path
                fill="#fff"
                d="M8 18V6H4.5c-.28 0-.5.22-.5.5v11c0 .28.22.5.5.5H8zm11.5 0c.28 0 .5-.22.5-.5v-11c0-.28-.22-.5-.5-.5H16v12h3.5zM10 6v12h4V6h-4zM4.5 20C3.12 20 2 18.88 2 17.5v-11C2 5.12 3.12 4 4.5 4h15C20.88 4 22 5.12 22 6.5v11c0 1.38-1.12 2.5-2.5 2.5h-15z"
              />
            </svg>
          </div>
          <div className="pr-4 text-xl">Pro</div>
        </button>
        <button className="p-3 h-14 w-full  inline-flex items-center gap-5  hover:bg-[#eff3f41a] transition-colors">
          <div className="w-[26.25px] h-[26.25px] ">
            <svg className="h-[52px]">
              <path
                fill="#fff"
                d="M1.996 5.5c0-1.38 1.119-2.5 2.5-2.5h15c1.38 0 2.5 1.12 2.5 2.5v13c0 1.38-1.12 2.5-2.5 2.5h-15c-1.381 0-2.5-1.12-2.5-2.5v-13zm2.5-.5c-.277 0-.5.22-.5.5v13c0 .28.223.5.5.5h15c.276 0 .5-.22.5-.5v-13c0-.28-.224-.5-.5-.5h-15zm8.085 5H8.996V8h7v7h-2v-3.59l-5.293 5.3-1.415-1.42L12.581 10z"
              />
            </svg>
          </div>
          <div className="pr-4 text-xl">Ads</div>
        </button>
        <Disclosure>
          <Disclosure.Button className="h-[52px] flex items-center justify-between w-full px-4 font-bold hover:bg-[#eff3f41a] transition-colors">
            İçerik Üreticisi Stüdyosu
            <svg viewBox="0 0 24 24" width={18.75} height={18.75}>
              <path
                fill="currentColor"
                d="M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z"
              />
            </svg>
          </Disclosure.Button>
          <Disclosure.Panel className="text-gray-500">
            <Link
              to="/"
              className="flex items-center px-3 h-11 gap-3 text-[15px] font-medium hover:bg-[#eff3f41a] transition-colors text-white"
            >
              <svg viewBox="0 0 24 24" width={18.75} height={18.75}>
                <path
                  fill="currentColor"
                  d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"
                />
              </svg>
              İstatistikler
            </Link>
          </Disclosure.Panel>
        </Disclosure>
      </Popover.Panel>
    </Popover>
  );
};

export default More;
