"use client";

import { Combobox, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { MdKeyboardArrowDown, MdCheck } from "react-icons/md";

const books: string[] = [
  "Genesis",
  "Exodus",
  "Leviticus",
  "Numeri",
  "Deuteronomium",
  "Jozua",
  "Richteren",
  "Ruth",
  "1 Samuël",
  "2 Samuël",
  "1 Koningen",
  "2 Koningen",
  "1 Kronieken",
  "2 Kronieken",
  "Ezra",
  "Nehemia",
  "Ester",
  "Job",
  "Psalmen",
  "Spreuken",
  "Prediker",
  "Hooglied",
  "Jesaja",
  "Jeremia",
  "Klaagliederen van Jeremia",
  "Ezechiël",
  "Daniël",
  "Hosea",
  "Joël",
  "Amos",
  "Obadja",
  "Jona",
  "Micha",
  "Nahum",
  "Habakuk",
  "Zefanja",
  "Haggai",
  "Zacharia",
  "Maleachi",
  "Mattheüs",
  "Marcus",
  "Lukas",
  "Johannes",
  "Handelingen",
  "Romeinen",
  "1 Korinthiërs",
  "2 Korinthiërs",
  "Galaten",
  "Efeziërs",
  "Filippenzen",
  "Kolossenzen",
  "1 Thessalonicensen",
  "2 Thessalonicensen",
  "1 Timotheüs",
  "2 Timotheüs",
  "Titus",
  "Filemon",
  "Hebreeën",
  "Jakobus",
  "1 Petrus",
  "2 Petrus",
  "1 Johannes",
  "2 Johannes",
  "3 Johannes",
  "Judas",
  "Openbaring",
];

export const BookSelectorBar: React.FC = () => {
  return (
    <div className="shadow-md w-full flex justify-center bg-gradient-to-br from-orange-600 to-orange-400 h-16">
      <div className="px-2 items-center flex h-full max-w-[70rem] w-full">
        <BookSelectorCombobox />
      </div>
    </div>
  );
};

const BookSelectorCombobox: React.FC = () => {
  const [selectedBook, setSelectedBook] = useState(books[0]);
  const [query, setQuery] = useState("");

  const filteredBooks = books.filter((book) =>
    book.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Combobox value={selectedBook} onChange={setSelectedBook}>
      <div className="relative h-[70%]">
        <div className="relative h-full flex items-center overflow-hidden text-left">
          <Combobox.Button>
            <Combobox.Input
              className="h-full bg-transparent text-gray-50 outline-none focus:outline-none"
              onClick={(e) =>
                e.currentTarget.setSelectionRange(
                  0,
                  e.currentTarget.value.length
                )
              }
              onChange={(e) => setQuery(e.target.value)}
            />
          </Combobox.Button>
          <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
            <MdKeyboardArrowDown
              className="h-5 w-5 text-gray-50"
              aria-hidden="true"
            />
          </Combobox.Button>
        </div>
      </div>

      <Transition
        as={Fragment}
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        afterLeave={() => setQuery("")}
      >
        <Combobox.Options className="absolute mt-1 max-h-96 w-fit overflow-auto rounded-md bg-white py-1 text-base shadow-lg sm:text-sm top-32">
          {filteredBooks.length === 0 && query !== "" ? (
            <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
              Geen boeken gevonden...
            </div>
          ) : (
            filteredBooks.map((book: string) => (
              <Combobox.Option
                key={book}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? "bg-orange-400 text-white" : "text-gray-900"
                  }`
                }
                value={book}
              >
                {({ selected, active }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {book}
                    </span>
                    {selected ? (
                      <span
                        className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                          active ? "text-white" : "text-orange-400"
                        }`}
                      >
                        <MdCheck className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Combobox.Option>
            ))
          )}
        </Combobox.Options>
      </Transition>
    </Combobox>
  );
};
