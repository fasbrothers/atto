import React from "react";
import { data, tariffs } from "./TariffsData";

function Tariffs() {

  return (
    <div className="lg:w-3/4">
        <h2 className="font-bold lg:text-2xl text-[#232455] mb-4 lg:mb-11 text-lg text-center lg:text-left">
          Tarif rejalari
        </h2>
        <div className="mt-8 text-[#232455] text-sm space-y-3">
          {data.map((item) => (
            <div key={item.id}>
              {item.title ? (
                <h3 className="font-bold text-sm mb-6">{item.title}</h3>
              ) : null}
              <p className="mb-6 leading-loose">{item.paragraph}</p>
              {item.list ? (
                <ul className="list-disc pl-5 mt-3">
                  {item.list.map((listItem) => (
                    <li className="mb-6 leading-5" key={listItem.listId}>{listItem.text}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))
          }
        </div>
        <div>
          {tariffs.map((item) => (
            <div key={item.id}>
              <h3 className="font-bold mb-6">{item.title}</h3>
              {item.variants.map((variant) => (
              <div className="flex mb-3">
                <div className={`w-1/4 ${item.backgroundColor}`}>
                  <h2>{variant.shortTitle}</h2>
                  <h5>{variant.title}</h5>
                </div>
                <div className="w-3/4 grid grid-cols-2 bg-[#EEF5FF] p-2.5">
                  {variant.prices.map((price) => (
                  <div className="p-4">
                    <p>{price.description}</p>
                    <p>{price.price}</p>
                  </div>
                  ))}
                </div>
              </div>
              ))}
            </div>
          ))}
        </div>
      </div>
  )
}

export default Tariffs;
