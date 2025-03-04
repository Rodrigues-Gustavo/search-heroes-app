import { useState } from "react";
import Image from "next/image";
import styles from "../app/page.module.css";
import Link from "next/link";

export default function Card(props:any){

    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return (
        <div>
            <Link href={`/${props.heroId}`}>
            <Image
                src={props.heroImage ?? "/assets/card/hero.png"}
                alt="Logo do Grupo"
                width={200}
                height={0}
                className={styles.imageCard}
            />
            </Link>
            <div className={styles.footerCard}>
                {props.heroName ?? 'nome do heroi'}
                <Image
                    src={
                        props.isFavorited
                            ? "/assets/icones/heart/Path.svg"
                            : isHovered
                            ? "/assets/icones/heart/Path Copy 7.svg"
                            : "/assets/icones/heart/Path Copy 2@1,5x.svg"
                    }
                    alt="Logo do Grupo"
                    width={20}
                    height={20}
                    className={styles.favoriteIcon}
                    onClick={props.onSelect}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                />
            </div>
        </div>
    )
}