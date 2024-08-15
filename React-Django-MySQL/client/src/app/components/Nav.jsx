import React from "react";
import Link from "next/link";
function Nav(){
    return (
        <ul>
            <li><Link href="/about">about</Link></li>
            <li><Link href="/services">services</Link></li>
            <li><Link href="/blog">blog</Link></li>
            <li><Link href="/contact">contact</Link></li>
        </ul>
    )
}

export default Nav