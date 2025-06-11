import { useState } from "react";
import { Str1 } from "../components/index";

export default ({startModal, setStartModal, startShipment}) => {
  const [getProduct, setGetProduct] = useState({
    receiver: "",
    index: "",
  });

  const startShipping = async () => {
    // startShipment(getProduct);
    try {
      await startShipment(getProduct); // Assuming startShipment returns a promise
      setStartModal(false); // Close the modal
      window.location.reload(); // Reload the page
    } catch (error) {
      console.error("Failed to start shipment:", error);
    }
  };
  return startModal ? (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div 
      className="fixed inset-0 w-full h-full bg-black opacity-40" 
      onClick={() => setStartModal(false)}></div>
      <div className="flex items-center min-h-screen p  x-4 py-8">
        <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
          <div className="flex justify-end">
            <button
              className="p-2 text-gray-400 rounded-md hover:bg-gray-100"
              onClick={() => setStartModal(false)}
            >
              <Str1 />
            </button>
            </div>
            <div className="max-w-sm mx-auto py-3 space-y-3 text-center">
            <h4 className="text-lg font-medium text-gray-800">
              Start The Shipping
            </h4>

            <form onSubmit={(e) => e.preventDefault()}>
              <div className="relative mt-3">
                <input
                  type="text"
                  placeholder="Receiver"
                  className="w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  onChange={(e) =>
                    setGetProduct({
                      ...getProduct,
                      receiver: e.target.value,
                    })
                  }
                />
              </div>
              <div className="relative mt-3">
                <input
                  type="text"
                  placeholder="Id"
                  className="w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  onChange={(e) => 
                    setGetProduct({
                      ...getProduct,
                      index: e.target.value,
                    })
                  }
                  />
                  </div>

                  <button
                  onClick={() => startShipping()}
                  className="block w-full mt-3 py-3 px-4 font-medium text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg focus:ring-2"
                  >
                    Start Shipment
                  </button>
                  </form>
                  </div>
                  </div>
                  </div>
                  </div>
  ) : (
    ""
  );
};
