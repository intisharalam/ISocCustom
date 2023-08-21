import styles from "../styles/footer.module.scss"
import Image from 'next/image'
import Logo from "/public/isoclogo-colored.svg"
import Link from 'next/link';

const footerCol = [
    ["Information", ["about", "contact"]],
    ["Projects", ["RadioRx", "RadioTx", "RadioCtrl"]]
];

function FooterList({ arrItems = ["", ["", ""]] }) {
    return (
        arrItems.map((listHead) => (
            <div key={listHead[0]} className={styles.footer_col}>
                <h4>{listHead[0]}</h4>
                <ul>
                    {listHead[1].map((listItems) => (
                        <li key={listItems}><Link href={listItems}>{listItems}</Link></li>
                    ))}
                </ul>
            </div>
        ))
    );
}

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"></link>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={[styles.footer_col, styles.footer_logo, styles['d-flex-c']].join(' ')}>
                        <Link href="/">
                            <Image
                                className={styles.logoImg}
                                src={Logo}
                                width={78}
                                height={78}
                                alt="logo"
                            />
                        </Link>
                    </div>

                    <FooterList arrItems={footerCol} />

                    <div className={styles.footer_col}>
                        <h4>follow us</h4>
                        <div className={styles.social_links}>
                            <a href="https://wa.me/447928189195"><i className={"fab fa-whatsapp"}></i></a>
                            <a href="https://www.instagram.com/misbahulintishar.inti/"><i className="fab fa-instagram"></i></a>
                            <a href="https://linkedin.com/in/intishar-alam-misbahul-b10a42222"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}