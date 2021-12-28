import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export default function TOC({ allPostsData }) {
    return (
        <aside className={utilStyles.asideBox}>
        <p id="toc-title">Table of Contents</p> 
            <ul className={` ${utilStyles.list} ${utilStyles.tocList} ${utilStyles.removeDecor} `}>
            {allPostsData.map(({ id, date, title }) => (
                <li className={` ${utilStyles.listItem} ${utilStyles.removeDecor} `} key={id}>
                <Link href={`/posts/${id}`}>
                    <a>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                    <Date dateString={date} />
                </small>
                </li>
            ))}
            </ul>
        </aside>
    );
}
