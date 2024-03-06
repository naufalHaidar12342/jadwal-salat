import { AiTwotoneApi } from "react-icons/ai";
import { MdPhotoCameraBack } from "react-icons/md";
import { getOpenGraphImageDatas } from "@/app/libraries/opengraph-imagedatas";
import { METADATA_BASEURL } from "../libraries/metadata-baseurl";
import { METADATA_ROBOTS } from "../libraries/metadata-robots";

export async function generateMetadata() {
	const [fetchedOpenGraphImageDatas] = await getOpenGraphImageDatas();
	const openGraphImageUrl =
		fetchedOpenGraphImageDatas.projectCoverImageAttribution.attributionImage
			.url;
	const openGraphImageAttribution =
		fetchedOpenGraphImageDatas.projectCoverImageAttribution.attributionMarkdown;
	const openGraphProject = fetchedOpenGraphImageDatas.projectTitle;
	const openGraphProjectSource =
		fetchedOpenGraphImageDatas.projectsRepositoryLink;
	return {
		title: "Attribution",
		description:
			"Attribution/credits untuk komponen yang digunakan dalam proyek ",
		...METADATA_BASEURL,
		...METADATA_ROBOTS,
		openGraph: {
			title: "Credits",
			description:
				"Credits/attribution untuk komponen yang digunakan di web ini.",

			images: [
				{
					url: "https://media.graphassets.com/me9kN2hR2iHQSXWrkBF6",
					alt: "Foto oleh Priscilla Du Preez 🇨🇦 di Unsplash (https://unsplash.com/photos/OEdkPaxYMXU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)",
					width: 1200,
					height: 630,
				},
			],
		},
	};
}

export default async function Credits() {
	return (
		<div className="w-full flex flex-col justify-center gap-2 items-center">
			<div className="hero h-40 bg-base-200 rounded-2xl">
				<div className="hero-content text-center">
					<div className="max-w-md">
						<h1 className="text-4xl font-bold">Credits</h1>
						<p className="py-6">
							Berikut <i>attribution</i> dari beberapa sumber yang digunakan di
							web ini.
						</p>
					</div>
				</div>
			</div>
			{/* favicon credits */}
			<div className="collapse bg-base-200">
				<input type="checkbox" className="peer" name="1st-collapsible" />
				<div className="collapse-title bg-info-content text-info peer-checked:bg-neutral peer-checked:text-neutral-content">
					⭐ favicon (logo kecil pada tab browser)
				</div>
				<div className="collapse-content bg-info-content text-info peer-checked:bg-neutral peer-checked:text-neutral-content">
					<p>
						<a
							href="https://www.flaticon.com/free-icons/prayer"
							title="prayer icons"
							target="_blank"
							referrerPolicy="no-referrer"
							className="link link-hover"
						>
							favicon created by amonrat rungreangfangsai - Flaticon
						</a>
					</p>
				</div>
			</div>

			{/* foto lawang sewu di index/homepage */}
			<div className="collapse bg-base-200">
				<input type="checkbox" className="peer" name="2nd-collapsible" />
				<div className="collapse-title bg-info-content text-info peer-checked:bg-neutral peer-checked:text-neutral-content">
					<MdPhotoCameraBack className="inline w-5 h-5" /> Lawang Sewu
				</div>
				<div className="collapse-content bg-info-content text-info peer-checked:bg-neutral peer-checked:text-neutral-content">
					<p>
						&quot;Lawang Sewu&quot; by{" "}
						<a
							href="https://unsplash.com/@irfanbayuaji?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
							target="_blank"
							referrerPolicy="no-referrer"
							className="link link-hover"
						>
							Irfan Bayuaji
						</a>{" "}
						on{" "}
						<a
							href="https://unsplash.com/photos/uhekY5RkpWM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
							target="_blank"
							referrerPolicy="no-referrer"
							className="link link-hover"
						>
							Unsplash
						</a>
					</p>
				</div>
			</div>
			<div className="collapse bg-base-200">
				<input type="checkbox" className="peer" name="3rd-collapsible" />
				<div className="collapse-title bg-info-content text-info peer-checked:bg-neutral peer-checked:text-neutral-content">
					<AiTwotoneApi className="inline w-5 h-5" /> API Jadwal Salat
				</div>
				<div className="collapse-content bg-info-content text-info peer-checked:bg-neutral peer-checked:text-neutral-content">
					<p>
						<a
							href="https://documenter.getpostman.com/view/841292/Tz5p7yHS#intro"
							target="_blank"
							referrerPolicy="no-referrer"
							className="link link-hover"
						>
							API myQuran.com
						</a>{" "}
						oleh Hasanudin H. Syafaat dan tim
					</p>
				</div>
			</div>
		</div>
	);
}