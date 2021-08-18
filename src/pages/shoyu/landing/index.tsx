import Image from 'next/image'

import { ChevronLeftIcon, ChevronRightIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline'
import Header from '../../../components/shoyu/Header'
import Footer from '../../../components/shoyu/Footer'
import Button from '../../../components/shoyu/Button'

import CrystalBall from '../../../assets/shoyu/crystal_ball.png'
import ImageCard from '../../../components/shoyu/ImageCard'

import DoubleBoxSvg from '../../../components/shoyu/DoubleBoxSvg'

export default function Landing() {
  return (
    <div className="flex flex-col">
      <Header height={64} balance={'1.704'} account={'levx.eth'} />
      <div className="flex flex-col sm:flex-row p-5 sm:p-10">
        <div className="flex-1">
          <Image src={CrystalBall} alt="Crystal Ball" />
        </div>
        <div className="flex-1 flex flex-col sm:ml-40 justify-between">
          <div className="flex flex-col">
            <div className="flex flex-col text-5xl sm:text-7xl font-ivar pt-10 sm:pt-0">
              <div>Hibiki</div>
              <div>The future frame</div>
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="flex-1">
                <div className="pl-2">Current bid</div>
                <div className="flex items-center mt-3">
                  <div className="font-ivar text-5xl sm:text-7xl">1.00</div>
                  <div className="ml-1">
                    <div className="uppercase">sushi</div>
                    <div className="text-gray-600">${` `}3,618.36</div>
                  </div>
                </div>
              </div>
              <div className="flex-1 mt-10 sm:mt-0">
                <div className="pl-2">Instant price</div>
                <div className="flex items-center mt-3">
                  <div className="font-ivar text-5xl sm:text-7xl">3.50</div>
                  <div className="ml-1">
                    <div className="uppercase">sushi</div>
                    <div className="text-gray-600">${` `}3,618.36</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-10">
              <div className="pl-2">Auction ending in</div>
              <div className="flex items-center mt-3">
                <div className="font-ivar text-5xl sm:text-7xl">19</div>
                <div className="ml-1">Hrs</div>
                <div className="font-ivar text-5xl sm:text-7xl ml-5">24</div>
                <div className="ml-1">Min</div>
                <div className="font-ivar text-5xl sm:text-7xl ml-5">34</div>
                <div className="ml-1">Sec</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="flex-1">
                <Button height={48} background={'#000000'} color={'#ffffff'} title={'Place a bid'} />
              </div>
              <div className="flex-1 ml-0 sm:ml-3 mt-5 sm:mt-0">
                <Button height={48} background={'#ffffff'} color={'#000000'} bcolor={'#000000'} title={'View Item'} />
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center mt-10 sm:justify-start sm:mt-0">
            <ChevronLeftIcon width={24} height={24} className="mr-5" />
            <ChevronRightIcon width={24} height={24} className="mr-5" />
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row m-5 sm:m-10 border-t border-gray-600 pt-5">
        <div className="flex-1 text-5xl sm:text-7xl font-ivar">Cultural commerce for the past, present and future*</div>
        <div className="flex-1 pt-5 pb-10 sm:py-0">
          <div className="sm:pl-40 sm:pr-40 pl-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row m-5 sm:m-10 border-t border-gray-600 pt-5">
        <div className="flex-1 flex">
          <div className="flex-1">Sort content:</div>
          <div className="flex-1 flex items-center">
            <ChevronDownIcon width={20} height={20} />
            <div className="ml-3">Latest</div>
          </div>
        </div>
        <div className="hidden sm:flex flex-1 justify-end items-center">
          <div>Explorer more</div>
          <ChevronRightIcon width={20} height={20} className="ml-3" />
        </div>
      </div>
      <div className="flex flex-col sm:grid sm:grid-cols-4 m-5 sm:m-10">
        <div className="sm:mr-5 pt-5">
          <ImageCard img={'test01'} timeframe={'29 hrs 35 mins'} creator={'creatorname'} price={355.55} />
        </div>
        <div className="sm:mr-5 pt-5">
          <ImageCard img={'test02'} timeframe={'29 hrs 35 mins'} creator={'creatorname'} price={355.55} />
        </div>
        <div className="sm:mr-5 pt-5">
          <ImageCard img={'test03'} timeframe={'29 hrs 35 mins'} creator={'creatorname'} price={355.55} />
        </div>
        <div className="pt-5">
          <ImageCard img={'test04'} timeframe={'29 hrs 35 mins'} creator={'creatorname'} price={355.55} />
        </div>
        <div className="sm:mr-5 pt-5">
          <ImageCard img={'test05'} timeframe={'29 hrs 35 mins'} creator={'creatorname'} price={355.55} />
        </div>
        <div className="sm:mr-5 pt-5">
          <ImageCard img={'test06'} timeframe={'29 hrs 35 mins'} creator={'creatorname'} price={355.55} />
        </div>
        <div className="sm:mr-5 pt-5">
          <ImageCard img={'test07'} timeframe={'29 hrs 35 mins'} creator={'creatorname'} price={355.55} />
        </div>
        <div className="pt-5">
          <ImageCard img={'test08'} timeframe={'29 hrs 35 mins'} creator={'creatorname'} price={355.55} />
        </div>
      </div>
      <div className="flex sm:hidden flex-1 items-center pl-5 pb-20">
        <div>Explorer more</div>
        <ChevronRightIcon width={20} height={20} className="ml-3" />
      </div>
      <div className="flex flex-col p-5 sm:p-10 gray-back">
        <div className="pt-5 flex border-t border-gray-600 mt-20">
          <div className="flex-1">&nbsp;</div>
          <div className="sm:w-1/3 sm:mr-40">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco
            </div>
            <div className="py-10">
              <DoubleBoxSvg width={64} height={64} fill={'#000000'} />
            </div>
          </div>
        </div>
        <div className="pt-5 flex flex-col sm:flex-row border-t border-gray-600 mt-20">
          <div className="flex-1 flex flex-col sm:flex-row">
            <div className="sm:w-1/3">Curator</div>
            <div className="flex-1 font-ivar text-3xl sm:text-5xl mt-5 sm:mt-0">
              <div>Rimowa</div>
              <div>Fashion Brand</div>
            </div>
          </div>
          <div className="sm:w-1/3 sm:mr-40 mt-5 sm:mt-0">
            <div>
              Morbi at lacus amet, ullamcorper. Ultrices sagittis venenatis massa est odio cras. Pellentesque facilisi
              fames ullamcorper nulla. Morbi at lacus amet, ullamcorper.
            </div>
            <div className="py-10 underline">Read more</div>
          </div>
        </div>
        <div className="flex flex-col sm:grid sm:grid-cols-4">
          <div className="sm:mr-5 pt-5">
            <ImageCard img={'test09'} timeframe={'29 hrs 35 mins'} creator={'creatorname'} price={355.55} />
          </div>
          <div className="sm:mr-5 pt-5">
            <ImageCard img={'test10'} timeframe={'29 hrs 35 mins'} creator={'creatorname'} price={355.55} />
          </div>
          <div className="sm:mr-5 pt-5">
            <ImageCard img={'test11'} timeframe={'29 hrs 35 mins'} creator={'creatorname'} price={355.55} />
          </div>
          <div className="pt-5">
            <ImageCard img={'test12'} timeframe={'29 hrs 35 mins'} creator={'creatorname'} price={355.55} />
          </div>
        </div>
      </div>
      <div className="flex flex-col p-5 sm:p-10">
        <div className="pt-5 flex flex-col sm:flex-row border-t border-gray-600 mt-20">
          <div className="flex-1 font-ivar text-5xl sm:text-7xl pb-5 sm:pb-0">Artists in focus</div>
          <div className="sm:w-1/3 sm:mr-40 pt-5 sm:pt-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco
          </div>
          <div className="w-6"></div>
        </div>
        <div className="pt-5 flex flex-col sm:flex-row border-t border-gray-600 mt-20 sm:mb-20">
          <div className="flex-1 flex flex-col sm:flex-row">
            <div className="sm:w-1/3">Artist</div>
            <div className="flex-1 font-ivar text-3xl sm:text-5xl mt-5 sm:mt-0">
              <div>Hibiki</div>
              <div>Motion Designer</div>
            </div>
          </div>
          <div className="sm:w-1/3 sm:mr-40 mt-5 sm:mt-0 flex">
            <div className="flex-1">
              Morbi at lacus amet, ullamcorper. Ultrices sagittis venenatis massa est odio cras. Pellentesque facilisi
              fames ullamcorper nulla. Morbi at lacus amet, ullamcorper.
            </div>
          </div>
          <ChevronUpIcon width={24} height={24} className="mt-10 mb-10 sm:mt-0 sm:mb-0 " />
        </div>
        <div className="flex flex-col sm:grid sm:grid-cols-4">
          <div className="sm:mr-5 pt-5">
            <ImageCard img={'test13'} timeframe={'29 hrs 35 mins'} creator={'creatorname'} price={355.55} />
          </div>
          <div className="sm:mr-5 pt-5">
            <ImageCard img={'test06'} timeframe={'29 hrs 35 mins'} creator={'creatorname'} price={355.55} />
          </div>
          <div className="sm:mr-5 pt-5">
            <ImageCard img={'test14'} timeframe={'29 hrs 35 mins'} creator={'creatorname'} price={355.55} />
          </div>
          <div className="pt-5">
            <ImageCard img={'test15'} timeframe={'29 hrs 35 mins'} creator={'creatorname'} price={355.55} />
          </div>
        </div>
        <div className="pt-5 flex flex-col sm:flex-row border-t border-gray-600 mt-10 sm:mt-20 mb-10 sm:mb-20">
          <div className="flex-1 flex flex-col sm:flex-row">
            <div className="sm:w-1/3">Artist</div>
            <div className="flex-1 font-ivar text-3xl sm:text-5xl mt-5 sm:mt-0">
              <div>Olaf Elisasson</div>
              <div>Artist</div>
            </div>
          </div>
          <div className="sm:w-1/3 sm:mr-40 mt-5 sm:mt-0 flex">
            <div className="flex-1">
              Morbi at lacus amet, ullamcorper. Ultrices sagittis venenatis massa est odio cras. Pellentesque facilisi
              fames ullamcorper nulla. Morbi at lacus amet, ullamcorper.
            </div>
          </div>
          <ChevronDownIcon width={24} height={24} className="mt-10 sm:mt-0" />
        </div>
        <div className="pt-5 flex flex-col sm:flex-row border-t border-gray-600 mt-10 sm:mt-20 mb-10 sm:mb-20">
          <div className="flex-1 flex flex-col sm:flex-row">
            <div className="sm:w-1/3">Artist</div>
            <div className="flex-1 font-ivar text-3xl sm:text-5xl mt-5 sm:mt-0">
              <div>Ai Weiwei</div>
              <div>Artist</div>
            </div>
          </div>
          <div className="sm:w-1/3 sm:mr-40 mt-5 sm:mt-0 flex">
            <div className="flex-1">
              Morbi at lacus amet, ullamcorper. Ultrices sagittis venenatis massa est odio cras. Pellentesque facilisi
              fames ullamcorper nulla. Morbi at lacus amet, ullamcorper.
            </div>
          </div>
          <ChevronDownIcon width={24} height={24} className="mt-10 mb-10 sm:mt-0 sm:mb-0 " />
        </div>
      </div>
      <div className="flex flex-col p-5 sm:p-10 gray-back">
        <div className="pt-5 flex flex-col sm:flex-row border-t border-gray-600 mt-20">
          <div className="flex-1 font-ivar text-5xl sm:text-7xl pb-5 sm:pb-0">News</div>
        </div>
        <div className="pt-5 flex flex-col sm:flex-row border-t border-gray-600 mt-20 sm:mb-20">
          <div className="flex-1 flex flex-col sm:flex-row">21.09.21</div>
          <div className="sm:w-1/3 sm:mr-40 mt-5 sm:mt-0 flex">
            <div className="flex-1">
              Morbi at lacus amet, ullamcorper. Ultrices sagittis venenatis massa est odio cras. Pellentesque facilisi
              fames ullamcorper nulla. Morbi at lacus amet, ullamcorper.
            </div>
          </div>
          <ChevronRightIcon width={24} height={24} className="mt-10 mb-10 sm:mt-0 sm:mb-0 " />
        </div>
        <div className="pt-5 flex flex-col sm:flex-row border-t border-gray-600 mt-10 sm:mt-20 mb-10 sm:mb-20">
          <div className="flex-1 flex flex-col sm:flex-row">
            <div className="sm:w-1/3">21.08.13</div>
            <div className="flex-1 font-ivar text-3xl sm:text-5xl mt-5 sm:mt-0">
              <div>Beeple drops his new work in September</div>
            </div>
          </div>
          <div className="sm:w-1/3 sm:mr-40 mt-5 sm:mt-0 flex">
            <div className="flex-1">
              Morbi at lacus amet, ullamcorper. Ultrices sagittis venenatis massa est odio cras. Pellentesque facilisi
              fames ullamcorper nulla. Morbi at lacus amet, ullamcorper.
            </div>
          </div>
          <ChevronRightIcon width={24} height={24} className="mt-10 sm:mt-0" />
        </div>
        <div className="pt-5 flex flex-col sm:flex-row border-t border-gray-600 mt-10 sm:mt-20 mb-10 sm:mb-20">
          <div className="flex-1 flex flex-col sm:flex-row">21.07.24</div>
          <div className="sm:w-1/3 sm:mr-40 mt-5 sm:mt-0 flex">
            <div className="flex-1">
              Morbi at lacus amet, ullamcorper. Ultrices sagittis venenatis massa est odio cras. Pellentesque facilisi
              fames ullamcorper nulla. Morbi at lacus amet, ullamcorper.
            </div>
          </div>
          <ChevronRightIcon width={24} height={24} className="mt-10 mb-10 sm:mt-0 sm:mb-0 " />
        </div>
      </div>
      <Footer />
    </div>
  )
}
