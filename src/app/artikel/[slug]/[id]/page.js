"use client";
import React, { useEffect } from "react";
import NavbarComp from "@/components/NavbarComp";
import PointKamu from "@/components/PointKamu/page";
import bannerartikel from "../..//../../../public/assets/bannerartikerl.png";
import Image from "next/image";
import ArtikelKami from "@/components/Home/ArtikelKami";
import FooterComp from "@/components/Home/Footer";
import { ArticleZustand } from "@/zustand/Article/article";

const styles = {
	content: {
		fontFamily: "'Poppins', sans-serif",
		marginTop: '6px',
	},
	list: {
		listStyleType: 'decimal',
		marginLeft: '20px',
	},
};

export default function Artikel({ params }) {
	const { getDetailArticle, detailDataArticle } = ArticleZustand();

	useEffect(() => {
		getDetailArticle(params.id);
	}, [getDetailArticle, params.id]);

	return (
		<div className="bg-white">
			<NavbarComp />
			<div className="relative h-[8.9rem] md:h-[30rem] bg-red-200 overflow-hidden">
				{detailDataArticle?.data?.foto &&
					detailDataArticle.data.foto.startsWith("/") && (
						<Image
							src={detailDataArticle.data?.[0]?.foto}
							alt="Banner Artikel"
							layout="fill"
							objectFit="cover"
							objectPosition="center"
						/>
					)}
			</div>

			<div className="pl-[1.42rem] pr-[1.42rem] md:pl-[8.5rem] md:pr-[8.5rem]">
				<h1 className="text-[12px] md:text-[24px] font-semibold text-start mt-6 font-poopin">
					{detailDataArticle?.data?.[0].sub_title} - {detailDataArticle?.data?.[0].title}
				</h1>
				<p className="text-start md:text-[16px] text-[10px] mt-2 text-gray-600">
					{detailDataArticle?.data?.[0].createdAt}
				</p>
				<div className="mt-6">
					{detailDataArticle?.data?.[0]?.content && (
						<div
							dangerouslySetInnerHTML={{ __html: detailDataArticle.data[0].content }}
							className="prose" // Menambahkan kelas Tailwind CSS untuk gaya konten
							style={styles.content}
						>
						</div>
					)}
				</div>
				<div className="mt-[10rem]">
					<ArtikelKami />
				</div>
			</div>
			<div className="mt-[5rem]">
				<FooterComp />
			</div>
		</div>
	);
}
