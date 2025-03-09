'use client';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { AiFillPlayCircle } from 'react-icons/ai';
import { SiEthereum } from 'react-icons/si';
import { BsInfoCircle } from 'react-icons/bs';
import Loader from './Loader';
import { useState } from 'react';

interface InputProps {
  placeholder: string;
  name: string;
  type: string;
  value: string | number;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>, name: string) => void;
}

interface FormData {
  addressTo: string;
  amount: string | number;
  keyword: string;
  message: string;
}

export default function Welcome() {
  const [formData, setFormData] = useState<FormData>({
    addressTo: '',
    amount: '',
    keyword: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const commonStyle =
    'min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white';

  const ConnectWallet = () => {
    // Placeholder function for wallet connection
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string,
  ) => {
    setFormData({ ...formData, [name]: e.target.value });
  };

  const sendTransaction = async () => {
    // Placeholder for sending the transaction (this should be implemented)
    console.log('Transaction Sent');
    setIsLoading(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    setIsLoading(true);
    sendTransaction();
  };

  const Input = ({
    placeholder,
    name,
    type,
    value,
    handleChange,
  }: InputProps) => (
    <input
      placeholder={placeholder}
      type={type}
      step="0.0001"
      value={value}
      onChange={(e) => handleChange(e, name)}
      className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
    />
  );

  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start flex-col mf:mr-10">
          <h1 className=" text-3xl sm:text-5xl text-white text-gradient py-1">
            Send Crypto <br /> across the world
          </h1>
          <p className="text-left mt-5 text-white font-light  md:w-9/12 w-11/12 text-base">
            Explore the Crypto world. Buy and sell Cryptocurrencies easily on
            Krypto. <br /> And learn About Blockchain and Bitcoin, And How to be
            Blockchain Developer.
            <br />
            Enjoy🚀
          </p>
          <Button
            type="button"
            className="flex flex-row justify-center items-center my-5 bg-[#2952e3] rounded-full cursor-pointer hover:bg-[#2546bd]"
            onClick={ConnectWallet}
          >
            <p className=" text-white text-base font-semibold ">
              Connect Wallet
            </p>
          </Button>
          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={`rounded-tl-2xl ${commonStyle}`}>Reliability</div>
            <div className={`${commonStyle}`}>Security</div>
            <div className={`rounded-tr-2xl ${commonStyle}`}>Etherum</div>
            <div className={`rounded-bl-2xl ${commonStyle}`}>Web 3.0</div>
            <div className={`${commonStyle}`}>Low fee </div>
            <div className={`rounded-br-2xl ${commonStyle}`}>Blockchain</div>
          </div>
        </div>
        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          <div className="p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism ">
            <div className=" flex flex-col justify-between w-full h-full">
              <div className=" flex justify-between items-start">
                <div className=" w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={20} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <div>
                <p className="text-white font-light text-sm ">Address</p>
                <p className="text-white font-semibold text-lg ">Etherum</p>
              </div>
            </div>
          </div>
          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
            <form onSubmit={handleSubmit}>
              <Input
                placeholder="Address To"
                name="addressTo"
                type="text"
                value={formData.addressTo}
                handleChange={handleChange}
              />
              <Input
                placeholder="Amount (ETH)"
                name="amount"
                type="number"
                value={formData.amount}
                handleChange={handleChange}
              />
              <Input
                placeholder="Keyword (Gif)"
                name="keyword"
                type="text"
                value={formData.keyword}
                handleChange={handleChange}
              />
              <Input
                placeholder="Enter Message"
                name="message"
                type="text"
                value={formData.message}
                handleChange={handleChange}
              />

              <div className="h-[1px] w-full bg-gray-400 my-2" />

              {isLoading ? (
                <Loader />
              ) : (
                <button
                  type="submit"
                  className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
                >
                  Send now
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
