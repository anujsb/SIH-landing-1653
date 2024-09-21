import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

// Importing image files
import KeyFeaturesIcon from "../assets/KeyFeatures.svg";
import BrainIcon from "../assets/Brain.svg";
import SearchIcon from "../assets/Search.svg";
import AnalyticsIcon from "../assets/Analytics.svg";

const Features = () => {
  return (
    <div className="my-20 pt-10 px-4 md:px-20 w-full flex flex-col items-center justify-center text-center" id="features">
      <div className="flex items-center justify-center bg-sec-col border border-5black rounded-full px-2 py-1">
        <img
          src={KeyFeaturesIcon}
          alt="Key Features icon"
          className="h-6 w-6 mr-2"
        />
        <div>Key Features</div>
      </div>
      <h1 className="my-6 text-xl md:text-2xl lg:text-4xl">
        Everything you are looking for
      </h1>
      <div className="grid grid-flow-row gap-4 p-4 md:p-10">
        <div className="grid grid-flow-row md:grid-flow-col gap-4 md:grid-cols-12">
          <div className="border rounded-lg p-4 col-span-12 md:col-span-7 bg-gradient-to-br from-[#f8f9fa] to-[#ebedfc]">
            <div className="flex flex-col md:flex-row justify-between items-center gap-2">
              <div className="flex flex-col justify-center w-full md:w-1/3">
                <h1 className="text-lg md:text-xl font-semibold">
                  AI-Powered Video Search
                </h1>
                <p className="font-light mt-2">
                  Search millions of videos automatically, no tagging needed.
                </p>
              </div>
              <div className="mt-2 w-full md:w-2/3">
                <Card className="w-full max-w-2xl mx-auto">
                  <CardHeader>
                    <CardTitle>AI-Powered Video Search</CardTitle>
                    <CardDescription>
                      Search for videos using natural language
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-2 mb-4">
                      <Input
                        type="text"
                        placeholder="Enter your search query..."
                        className="flex-grow text-white"
                      />
                      <Button className="text-white" variant="outline">
                        Search
                        <img
                          src={SearchIcon}
                          width={25}
                          height={25}
                          alt="search icon"
                          className="ml-2 h-4 w-4"
                        />
                      </Button>
                    </div>
                  </CardContent>
                  <CardFooter className="text-sm text-gray-500">
                    Powered by AI technology
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
          <div className="border rounded-lg p-4 col-span-12 md:col-span-5 brain">
            <div className="flex items-center">
              <div className="p-2 bg-light-lavender rounded-2xl border mr-4">
                <img
                  src={BrainIcon}
                  width={25}
                  height={25}
                  alt="brain icon"
                />
              </div>
              <h1 className="text-lg md:text-xl font-semibold">
                Contextual Understanding
              </h1>
            </div>
            <p className="font-light mt-4">
              Understand the context behind millions of videos.
            </p>
          </div>
        </div>
        <div className="grid grid-flow-row md:grid-flow-col gap-4">
          <div className="border rounded-lg p-4">
            <div className="flex items-center">
              <div className="p-2 bg-light-lavender rounded-2xl border mr-4">
                <img
                  src={SearchIcon}
                  width={25}
                  height={25}
                  alt="search icon"
                />
              </div>
              <h1 className="text-lg md:text-xl font-semibold">Sub-clip Search</h1>
            </div>
            <p className="font-light mt-4">
              Search through sub-clips to find specific content.
            </p>
            <div className="p-2 bg-light-lavender rounded-xl border mr-4 mt-5 min-h-48 bg-white">
              {/* <img src={SearchIcon} width={70} height={70} alt="image" /> */}
              <p className="text-gray-300">PlaceHolder for image</p>
            </div>
          </div>
          <div className="border rounded-lg p-4">
            <div className="flex items-center">
              <div className="p-2 bg-light-lavender rounded-2xl border mr-4">
                <img
                  src={AnalyticsIcon}
                  width={25}
                  height={25}
                  alt="analytics icon"
                />
              </div>
              <h1 className="text-lg md:text-xl font-semibold">
                Analytics & Reporting
              </h1>
            </div>
            <p className="font-light mt-4">
              Generate detailed reports and insights on your video collection.
            </p>
            <div className="p-2 bg-light-lavender rounded-xl border mr-4 mt-5 min-h-48 bg-white">
              {/* <img src={SearchIcon} width={70} height={70} alt="image" /> */}
              <p className="text-gray-300">PlaceHolder for image</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
