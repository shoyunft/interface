import Image from 'next/image'

import { ChevronRightIcon } from '@heroicons/react/outline'
import Header from '../../../components/shoyu/Header'
import Footer from '../../../components/shoyu/Footer'

import BackgroundImg from '../../../assets/shoyu/test23.png'
import ImageCard from '../../../components/shoyu/ImageCard'

import DoubleBoxSvg from '../../../components/shoyu/DoubleBoxSvg'

export default function Featured() {
  return (
    <div className="flex flex-col">
      <Header height={64} balance={'1.704'} account={'levx.eth'} />
      <div className="flex flex-col sm:flex-row">
        <Image src={BackgroundImg} alt="Background Image" />
      </div>
      <div className="flex flex-col sm:flex-row m-5 sm:m-10 pt-5">
        <div className="flex-1">&nbsp;</div>
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
        <div className="sm:w-1/3">
          <div className="pt-40 sm:pt-0">Latest curator</div>
          <div className="font-ivar text-3xl sm:text-5xl pt-10">Stockholm Design Lab Design Agency</div>
          <div className="pt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
          </div>
          <div className="underline pt-10">Read more</div>
          <div className="pt-10 pb-20">
            <DoubleBoxSvg width={64} height={64} fill={'#000000'} />
          </div>
        </div>
        <div className="hidden sm:flex flex-1"></div>
      </div>
      <div className="flex flex-col sm:grid sm:grid-cols-4 m-5 sm:m-10">
        <div className="sm:mr-5 pt-5">
          <ImageCard img={'test24'} timeframe={'29 hrs 35 mins'} creator={'creatorname'} price={355.55} />
        </div>
        <div className="sm:mr-5 pt-5">
          <ImageCard img={'test25'} timeframe={'29 hrs 35 mins'} creator={'creatorname'} price={355.55} />
        </div>
        <div className="sm:mr-5 pt-5">
          <ImageCard img={'test26'} timeframe={'29 hrs 35 mins'} creator={'creatorname'} price={355.55} />
        </div>
        <div className="pt-5">
          <ImageCard img={'test27'} timeframe={'29 hrs 35 mins'} creator={'creatorname'} price={355.55} />
        </div>
      </div>
      <div className="flex flex-1 items-center pl-5 pb-20 sm:pl-10">
        <div>Load more</div>
        <ChevronRightIcon width={20} height={20} className="ml-3" />
      </div>
      <div className="flex flex-col sm:flex-row m-5 sm:m-10 border-t border-gray-600 pt-5">
        <div className="hidden sm:flex flex-1"></div>
        <div className="sm:w-2/5 sm:pr-60">
          <div className="pt-40 sm:pt-0">Curator</div>
          <div className="font-ivar text-3xl sm:text-5xl pt-10">
            Rimowa
            <br />
            Brand
          </div>
          <div className="pt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
          </div>
          <div className="underline pt-10">Read more</div>
          <div className="pt-10 pb-20">
            <DoubleBoxSvg width={64} height={64} fill={'#000000'} />
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:grid sm:grid-cols-4 m-5 sm:m-10">
        <div className="sm:mr-5 pt-5">
          <ImageCard img={'test11'} timeframe={'29 hrs 35 mins'} creator={'creatorname'} price={355.55} />
        </div>
        <div className="sm:mr-5 pt-5">
          <ImageCard img={'test10'} timeframe={'29 hrs 35 mins'} creator={'creatorname'} price={355.55} />
        </div>
        <div className="sm:mr-5 pt-5">
          <ImageCard img={'test09'} timeframe={'29 hrs 35 mins'} creator={'creatorname'} price={355.55} />
        </div>
        <div className="pt-5">
          <ImageCard img={'test12'} timeframe={'29 hrs 35 mins'} creator={'creatorname'} price={355.55} />
        </div>
      </div>
      <div className="flex flex-1 items-center pl-5 pb-20 sm:pl-10">
        <div>Load more</div>
        <ChevronRightIcon width={20} height={20} className="ml-3" />
      </div>
      <div className="flex flex-col sm:flex-row m-5 sm:m-10 border-t border-gray-600 pt-5">
        <div className="sm:w-1/3">
          <div className="pt-40 sm:pt-0">Latest curator</div>
          <div className="font-ivar text-3xl sm:text-5xl pt-10">
            MOMA
            <br />
            Art Institution
          </div>
          <div className="pt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
          </div>
          <div className="underline pt-10">Read more</div>
          <div className="pt-10 pb-20">
            <DoubleBoxSvg width={64} height={64} fill={'#000000'} />
          </div>
        </div>
        <div className="hidden sm:flex flex-1"></div>
      </div>
      <div className="flex flex-col sm:grid sm:grid-cols-4 m-5 sm:m-10">
        <div className="sm:mr-5 pt-5">
          <ImageCard img={'test28'} timeframe={'29 hrs 35 mins'} creator={'creatorname'} price={355.55} />
        </div>
        <div className="sm:mr-5 pt-5">
          <ImageCard img={'test29'} timeframe={'29 hrs 35 mins'} creator={'creatorname'} price={355.55} />
        </div>
        <div className="sm:mr-5 pt-5">
          <ImageCard img={'test30'} timeframe={'29 hrs 35 mins'} creator={'creatorname'} price={355.55} />
        </div>
        <div className="pt-5">
          <ImageCard img={'test15'} timeframe={'29 hrs 35 mins'} creator={'creatorname'} price={355.55} />
        </div>
      </div>
      <div className="flex flex-1 items-center pl-5 pb-20 sm:pl-10">
        <div>Load more</div>
        <ChevronRightIcon width={20} height={20} className="ml-3" />
      </div>
      <div className="flex flex-col p-5 sm:p-10">
        <div className="pt-5 flex flex-col sm:flex-row border-t border-gray-600 mt-10 sm:mt-20 mb-10 sm:mb-20">
          <div className="flex-1 flex flex-col sm:flex-row text-5xl sm:text-7xl font-ivar">Other artists in focus</div>
          <div className="sm:w-1/3 sm:mr-40 mt-5 sm:mt-0 flex">
            <div className="flex-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco
            </div>
          </div>
          <div className="hidden sm:flex w-6"></div>
        </div>
        <div className="pt-5 flex flex-col sm:flex-row border-t border-gray-600 mt-10 sm:mt-20 mb-10 sm:mb-20">
          <div className="flex-1 flex flex-col sm:flex-row">
            <div className="sm:w-1/3">Artist</div>
            <div className="flex-1 font-ivar text-3xl sm:text-5xl mt-5 sm:mt-0">
              <div>
                Hibiki
                <br />
                Motion Designer
              </div>
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
          <div className="flex-1 flex flex-col sm:flex-row">
            <div className="sm:w-1/3">Artist</div>
            <div className="flex-1 font-ivar text-3xl sm:text-5xl mt-5 sm:mt-0">
              <div>
                Olaf Elisasson
                <br />
                Artist
              </div>
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
        <div className="pt-5 flex flex-col sm:flex-row border-t border-gray-600 mt-10 sm:mt-20 mb-20">
          <div className="flex-1 flex flex-col sm:flex-row">
            <div className="sm:w-1/3">Artist</div>
            <div className="flex-1 font-ivar text-3xl sm:text-5xl mt-5 sm:mt-0">
              <div>
                Ai Weiwei
                <br />
                Artist
              </div>
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
      </div>
      <Footer />
    </div>
  )
}
