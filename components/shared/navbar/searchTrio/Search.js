/**
 * Title: Write a program using JavaScript on Search
 * Author: Noyon Podder
 * Portfolio: https://dev-noyon.vercel.app/
 * Linkedin: https://linkedin.com/in/dev-noyon
 * GitHub: https://github.com/noyon-podder
 * Facebook: https://www.facebook.com/noyon.Podder7/
 * Instagram: https://www.instagram.com/noyon.podder7/
 * Twitter: https://x.com/noyon_podder7
 * WhatsApp: https://wa.me/8801752441505
 * Telegram: https://t.me/Noyonpodder7
 * Date: 17 December 2024
 */

import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import Tooltip from "../../tooltip/Tooltip";
import Modal from "../../modal/Modal";
import SearchFilter from "./SearchFilter";
import HighlightText from "../../highlightText/HighlightText";

const Search = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Tooltip text="Search">
        <button
          className="p-1.5 border border-primary/20 hover:border-primary rounded"
          onClick={openModal}
        >
          <BiSearch className="text-lg" />
        </button>
      </Tooltip>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        className="lg:w-1/3 md:w-1/2 w-full z-50"
      >
        <div className="flex flex-col gap-y-4 h-full">
          <h1 className="text-2xl drop-shadow">
            Search Your <HighlightText>Destination</HighlightText>
          </h1>
          <SearchFilter setIsModalOpen={setIsModalOpen} />
        </div>
      </Modal>
    </>
  );
};

export default Search;
