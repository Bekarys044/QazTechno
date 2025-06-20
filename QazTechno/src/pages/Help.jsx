import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { useTranslation } from "react-i18next";

function Help() {
  const { t } = useTranslation();

  return (
    <div className="h-screen w-full px-4 my-10 pt-20">
      <div className="mx-auto w-full max-w-lg divide-y divide-white/5 rounded-xl bg-white/5">
        {[1, 2, 3, 4, 5, 6].map((num, index) => (
          <Disclosure key={index} as="div" className="p-6" defaultOpen={num === 1}>
            <DisclosureButton className="group flex w-full items-center justify-between">
              <span className="text-sm/6 font-medium text-white group-data-hover:text-white/80">
                {t(`Help.faq_${num}_q`)}
              </span>
              <ChevronDownIcon className="size-5 fill-white/60 group-data-hover:fill-white/50 group-data-open:rotate-180" />
            </DisclosureButton>
            <DisclosurePanel className="mt-2 text-sm/5 text-white/50">
              {t(`Help.faq_${num}_a`)}
            </DisclosurePanel>
          </Disclosure>
        ))}
      </div>
    </div>
  );
}

export default Help;
