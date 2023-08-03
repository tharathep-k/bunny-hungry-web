export default function ModalOrderCard({ open, onClose, data, modalData }) {
  const handleOnClose = () => {
    onClose();
  };

  const orderItemData = modalData.orderItems;
  // console.log("llllll-- : ", orderItemData);

  const sumPrice = orderItemData
    ?.map((el) => ({ sumPrice: el.quantity * el.price }))
    .reduce((acc, el) => acc + el.sumPrice, 0);

  // console.log("++++++ :", sumPrice);

  const date = modalData.createdAt?.slice(0, 9);
  const time = modalData.createdAt?.slice(11, 19);
  // console.log("++++++ :", time);

  return (
    <>
      {open && (
        <>
          <div className="fixed inset-0 bg-gray-100 z-20"></div>
          <div className="fixed inset-0 z-30 overflow-auto h-[53rem]">
            <div
              onClick={handleOnClose}
              className="pl-4 pt-4 pb-4 text-gray-600"
            >
              &#10005;
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="border border-black sm:h-[49.5rem] sm:w-[24rem] flex flex-col justify-between rounded-lg">
                <div className="flex justify-between pt-4">
                  <div className="pl-2">orderID : {data.id} </div>
                  <div className="pr-2">
                    Time: {time} / {date}{" "}
                  </div>
                </div>
                <hr className="border-red-300" />
                <div className="h-[43rem]">
                  {orderItemData?.map((el) => (
                    <>
                      <div className="flex justify-between pb-4 pt-4">
                        <div className="pl-2">{el.quantity}x</div>
                        <div className="w-[16rem]">
                          {el.menu.name}
                          <br />
                          {el.addEgg.name} {el.addSpicy.name} {el.extra.name}
                        </div>
                        <div className="pr-2">{el.quantity * el.price}</div>
                      </div>
                      <hr className="border-red-300" />
                    </>
                  ))}
                </div>
                <hr className="border-red-300" />
                <div className="flex justify-end pb-2">
                  <div className="pr-2">price amount : {sumPrice}</div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
