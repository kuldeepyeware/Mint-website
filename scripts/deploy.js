
const hre = require("hardhat");

async function main() {
  const PunksNFT = await hre.ethers.getContractFactory("PunksNFT");
  const punksNFT = await PunksNFT.deploy();

  await punksNFT.deployed();

  console.log("PunksNFT deplyoed to:", punksNFT.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
