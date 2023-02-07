/** @format */
import "./style.scss";
import { DealList, footerList, holdersList, operateList } from "../contants";
import { getSvg } from "../svgTpes";
import { useState } from "react";
import logo from "../assets/logo.svg";
import holders from "../assets/holders.webp";
import gif from "../assets/fill.gif";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [deal, setDeal] = useState("Deposit");
  const [operate, setOperate] = useState("Deposit");
  return (
    <div className='fill'>
      <div className='fill-logo logo'>
        <img src={logo} className='logo' alt='' />
        {/* <div
          className='app'
          onClick={() => {
            window.open("/home");
          }}>
          Launch APP
        </div> */}
      </div>
      <div className='fill-header'>
        <img className='gif' src={gif} alt='' />

        <div className='text-title'>
          <div className='title'>
            FILECOIN LIQUIDITY POOL FOR
            <span className='show-color ml-15'>STORAGE PROVIDERS</span>
          </div>

          <div className='detail-text'>Borrow, Earn, Build and Grow</div>
        </div>
      </div>
      <div className='fill-card'>
        <div className='card-icon'>
          <img src={holders} alt='' />
        </div>
        <div className='card-title holders-title'>
          DESIGNED FOR STORAGE PROVIDERS AND{" "}
          <span className='show-color ml-15'>FILECOIN HOLDERS</span>
        </div>
        <ul className='holders-content'>
          {holdersList.map((holderItem) => {
            return (
              <li key={holderItem.key} className='holders-content-item'>
                <div>
                  <span className={`${holderItem.key}_svg`}>
                    {getSvg(holderItem.key)}
                  </span>
                </div>
                <div>{holderItem.text}</div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className='fill-card'>
        <div className='card-title holders-title'>
          WHAT IS FILL
          <span className='show-color ml-15'>BUILT FOR</span>
        </div>
        <div className='title-detail'>
          A Non-custodial, completely on-chain protocol acting as the financial
          intermediary
        </div>
        <div className='deal-content'>
          <div className='deal-content-header'>
            {Object.keys(DealList).map((key: string, index) => {
              return (
                <div
                  key={key}
                  className={`dealItem deal-${index} ${
                    key === deal ? "active" : ""
                  }`}
                  onClick={() => {
                    setDeal(key);
                  }}>
                  {key}
                </div>
              );
            })}
          </div>
          <div className='detail'>
            <div className='detail-text'>
              {DealList[deal]?.title}
              <div className='text-main'>{DealList[deal]?.text}</div>
            </div>
            <div className={`detail-img ${deal}`}>{DealList[deal]?.icons}</div>
          </div>
        </div>
      </div>
      <div className='fill-card'>
        <div className='card-title holders-title'>
          HOW DOSE FILL<span className='show-color ml-15'>OPERATE</span>
        </div>
        <div className='operate-content'>
          <div className='operate-content-header'>
            <div className='header'>
              {Object.keys(operateList).map((key, index) => {
                return (
                  <div
                    key={key}
                    className={`operateItem operate-${index} ${
                      key === operate ? "active" : ""
                    }`}
                    onClick={() => {
                      setOperate(key);
                    }}>
                    <span> {key}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className='detail'>
            <div className='detail-text'>
              {operateList[operate]?.title}
              <ol className='text-main'>
                {operateList[operate]?.text.map(
                  (text: Array<string>, index: number) => {
                    return <li key={index}>{text}</li>;
                  }
                )}
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className='footer'>
        <div className='fill-logo logo'>
          <img src={logo} className='logo' alt='' />
        </div>
        <div className='link'>
          {footerList.map((item, index) => {
            return (
              <div key={index} className='link_item'>
                {item.map((obj: any) => {
                  return (
                    <div
                      key={obj.title}
                      className='item'
                      onClick={() => {
                        if (obj.link) window?.open(obj.link);
                      }}>
                      {obj.title}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
