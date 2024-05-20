"use client";

import { useContext, useEffect, useState } from "react";
import styles from "./HeroGrid.module.scss";
import Image from "next/image";
import Paragraph from "@/components/Paragraph";
import Button from "@/components/Button";
import { ViewportContext } from "@/context/viewport.context";

interface Props {}

export default function NewHeroGrid(props: Props) {
  const { viewportWidth } = useContext(ViewportContext);

  const [active, setActive] = useState("none");

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.leftBox}>
          <div
            className={`${styles.first} ${
              active === "first" ? styles.firstActive : ""
            } `}
            onMouseEnter={
              viewportWidth > 1000 ? () => setActive("first") : undefined
            }
            onMouseLeave={() => setActive("none")}
          >
            <div className={styles.innerFirst}>
              <Image
                className={styles.firstImage}
                alt="playstation"
                src="/playstation-5.png"
                width={480}
                height={443}
              />
              <div className={styles.firstContent}>
                <h2>Playstation 5</h2>
                <Paragraph>
                  Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
                  will redefine your PlayStation experience.
                </Paragraph>
                <Button>Shop Now</Button>
              </div>
            </div>
          </div>

          <div
            className={`${styles.secondThirdBox} ${
              active === "second" || active === "third" ? styles.active : ""
            }`}
          >
            <div
              className={`${styles.second} ${
                active === "second" ? styles.secondActive : ""
              }`}
              onMouseEnter={
                viewportWidth > 1000 ? () => setActive("second") : undefined
              }
              onMouseLeave={() => setActive("none")}
            >
              <div className={styles.innerSecond}>
                <Image
                  src="/apple-airpods-max.png"
                  width="230"
                  height="255"
                  alt=""
                />
                <div className={styles.secondContent}>
                  <h2>
                    Apple AirPods <span className="bold">Max</span>
                  </h2>
                  <Paragraph>
                    Computational audio. Lbisten, it's powerful
                  </Paragraph>
                  <Button>Shop Now</Button>
                </div>
              </div>
            </div>
            <div
              className={`${styles.third} ${
                active === "third" ? styles.thirdActive : ""
              }`}
              onMouseEnter={
                viewportWidth > 1000 ? () => setActive("third") : undefined
              }
              onMouseLeave={() => setActive("none")}
            >
              <div className={styles.innerThird}>
                <Image
                  src="/apple-vision-pro.png"
                  width="290"
                  height="195"
                  alt=""
                />
                <div className={styles.thirdContent}>
                  <h2>
                    Apple Vision <span className="bold">Pro</span>
                  </h2>
                  <Paragraph>
                    An immersive way to experience entertainment
                  </Paragraph>
                  <Button>Shop Now</Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${styles.fourth} ${
            active === "fourth" ? styles.fourthActive : ""
          }`}
          onMouseEnter={
            viewportWidth > 1000 ? () => setActive("fourth") : undefined
          }
          onMouseLeave={() => setActive("none")}
        >
          <div className={styles.innerFourth}>
            <div className={styles.fourthContent}>
              <h2>
                Macbook <span className="bold">Air</span>
              </h2>
              <Paragraph className={styles.boxFourParagraph}>
                The new 15‑inch MacBook Air makes room for more of what you love
                with a spacious Liquid Retina display.
              </Paragraph>
              <Button>Shop Now</Button>
            </div>
            <Image src="/macbook-air.png" width="750" height="502" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
