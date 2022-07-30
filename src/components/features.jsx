import Img1 from "../assets/forest_mint.png";
import Img2 from "../assets/ice_mint.png";
import Img3 from "../assets/nether_mint.png";
import Img4 from "../assets/sand_mint.png";
import Img5 from "../assets/volcano_mint.png";

export const Features = () => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <h3>
          Be part of our ever-growing community, create your own world within
          the Metaverse along side 3,000+ holders.
        </h3>
        <h5>See more below 👇</h5>
        <div className="row">
          <div className="features-plots">
            <div>32,000km² Area</div>
            <div>20,000 Plots</div>
            <div>3,000+ Holders</div>
          </div>
          <div className="features-buttons">
            <a
              className="register"
              href="https://unrealkingdoms.com/PlayerLogin/register.php"
              target="_blank" rel="noreferrer"
            >
              Register now
            </a>
            <a href="#plots">See Plot options</a>
            <a
              href="https://nicepage.com/k/children-website-templates"
              target="_blank" rel="noreferrer"
            >
              Buy Land
            </a>
          </div>
        </div>
      </div>
      <div id="plots">
        <div className="container">
          <div className="section-title">
            <h2>Available Plots</h2>
          </div>
          <div className="row">
            <div className="images col-md-12">
              <div className="col-md-2">
                <a
                  href="https://gateway.ipfscdn.io/ipfs/QmZ3UzARChNBBVdqcbibQ63nvtePkRfnyieb89sXTRMLxE/marketplace.html?contract=0xaEE47a3c4c985f77fBB0E4b07D033Ab16023F060&amp;chainId=1&amp;listingId=0"
                  target="_blank" rel="noreferrer"
                >
                  <img src={Img1} />
                </a>
              </div>
              <div className="col-md-2">
                <a
                  href="https://gateway.ipfscdn.io/ipfs/QmZ3UzARChNBBVdqcbibQ63nvtePkRfnyieb89sXTRMLxE/marketplace.html?contract=0xaEE47a3c4c985f77fBB0E4b07D033Ab16023F060&amp;chainId=1&amp;listingId=1"
                  target="_blank" rel="noreferrer"
                >
                  <img src={Img2} />
                </a>
              </div>
              <div className="col-md-2">
                <a
                  href="https://gateway.ipfscdn.io/ipfs/QmZ3UzARChNBBVdqcbibQ63nvtePkRfnyieb89sXTRMLxE/marketplace.html?contract=0xaEE47a3c4c985f77fBB0E4b07D033Ab16023F060&amp;chainId=1&amp;listingId=2"
                  target="_blank" rel="noreferrer"
                >
                  <img src={Img3} />
                </a>
              </div>
              <div className="col-md-2">
                <a
                  href="https://gateway.ipfscdn.io/ipfs/QmZ3UzARChNBBVdqcbibQ63nvtePkRfnyieb89sXTRMLxE/marketplace.html?contract=0xaEE47a3c4c985f77fBB0E4b07D033Ab16023F060&amp;chainId=1&amp;listingId=3"
                  target="_blank" rel="noreferrer"
                >
                  <img src={Img4} />
                </a>
              </div>
              <div className="col-md-2">
                <a
                  href="https://gateway.ipfscdn.io/ipfs/QmZ3UzARChNBBVdqcbibQ63nvtePkRfnyieb89sXTRMLxE/marketplace.html?contract=0xaEE47a3c4c985f77fBB0E4b07D033Ab16023F060&amp;chainId=1&amp;listingId=4"
                  target="_blank" rel="noreferrer"
                >
                  <img src={Img5} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
