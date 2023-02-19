const PushAPI = require("@pushprotocol/restapi");

const ethers = require("ethers");
const PK = "// your private key here";
const Pkey = `0x${PK}`;
const signer = new ethers.Wallet(Pkey);

const sendNotification = async () => {
  try {
    const apiResponse = await PushAPI.payloads.sendNotification({
      signer,
      type: 3, // target
      identityType: 2, // direct payload
      notification: {
        title: `rare sword 3 rented by 0xdef....564gg`,
        body: `Your listed item has been rented!`,
      },
      payload: {
        title: `ITEM RENTED!!!!`,
        body: `Your listed item has been rented!`,
        cta: "",
        img: "",
      },
      recipients: "eip155:5:0x9aCEcAF7e11BCbb9c114724FF8F51930e24f164b", // recipient address
      channel: "eip155:5:0xd8515Ee7b256C3c0Ba9465fCDC45599437d5826A", // your channel address
      env: "staging",
    });

    // apiResponse?.status === 204, if sent successfully!
    console.log("API repsonse: ", apiResponse);
  } catch (err) {
    console.error("Error: ", err);
  }
};

sendNotification();
