<script>
	import { ActionSheet } from '@capacitor/action-sheet';
	import { Camera, CameraResultType } from '@capacitor/camera';
	import { onMount } from 'svelte';

	onMount(() => {
		Camera.requestPermissions();
	});
	const takePicture = async () => {
		const image = await Camera.getPhoto({
			quality: 100,
			saveToGallery: true,
			format: 'jpeg',
			promptLabelHeader: 'Adicionar foto',
			presentationStyle: 'fullscreen',
			promptLabelPicture: 'Tirar foto',
			promptLabelPhoto: 'Escolher da galeria',
			resultType: CameraResultType.Uri
		});

		const { GPS } = image.exif;
		alert({ GPS });

		// image.webPath will contain a path that can be set as an image src.
		// You can access the original file using image.path, which can be
		// passed to the Filesystem API to read the raw data of the image,
		// if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
		// var imageUrl = image.webPath;

		// // Can be set to the src of an image now
		// imageElement.src = imageUrl;
	};

	// $: if (window) defineCustomElements(window);

	// onMount(() => {
	// 	if (window) defineCustomElements(window);
	// });

	const showActions = async () => {
		console.log('clicked', { ActionSheet });
		const options = [
			{
				title: 'Take a picture',
				icon: 'camera-outline'
			},
			{
				title: 'Camera Roll',
				icon: 'image-outline'
			}
		];
		const result = await ActionSheet.showActions({
			options
		});

		if (result != null) {
			if (result.index == 0) takePicture();
		}

		console.log('Action Sheet result:', result);
	};
</script>

<nav
	style="--bottom: max(env(safe-area-inset-bottom), 1rem)"
	class="inline-flex bg-white rounded-3xl shadow-lg fixed bottom-[--bottom] left-1/2 -translate-x-1/2 items-start"
>
	<button class="p-5 pr-2">
		<svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
			<circle
				cx="10.0641"
				cy="5.83451"
				r="5.4943"
				fill="#381600"
				style="fill:#381600;fill:color(display-p3 0.2200 0.0880 0.0000);fill-opacity:1;"
			/>
			<path
				d="M19.0852 17.9523C17.5179 14.8009 14.0325 12.6084 9.9845 12.6084C5.93646 12.6084 2.45108 14.8009 0.883758 17.9523C0.459487 18.8053 0.175768 19.7287 0.0594861 20.6978C-0.00630819 21.2462 0.447717 21.6955 1 21.6955H19.0825C19.6523 21.6955 20.1117 21.218 20.0107 20.6571C19.8564 19.8004 19.5553 18.8973 19.0852 17.9523Z"
				fill="#381600"
				style="fill:#381600;fill:color(display-p3 0.2200 0.0880 0.0000);fill-opacity:1;"
			/>
		</svg>
	</button>
	<div class="-my-1 p-1 rounded-full aspect-square bg-white">
		<button
			on:click={takePicture}
			class="bg-orange rounded-full w-[61px] h-[61px] flex items-center justify-center border-brown border"
		>
			<svg
				width="36"
				height="29"
				viewBox="0 0 36 29"
				fill="none"
				class="-mt-1"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g>
					<path
						d="M30.1536 8.17654V5.45744H27.4345V2.73833H30.1536V0.0192261H32.8727V2.73833H35.5918V5.45744H32.8727V8.17654H30.1536Z"
						fill="#381600"
						style="fill:#381600;fill:color(display-p3 0.2200 0.0880 0.0000);fill-opacity:1;"
					/>
					<path
						d="M17 23.6675C15.9654 23.6675 15.0222 23.4154 14.1702 22.9111C13.3182 22.4069 12.6401 21.7288 12.1358 20.8768C11.6316 20.0248 11.3795 19.0772 11.3795 18.0339C11.3795 16.9907 11.6316 16.043 12.1358 15.1911C12.6401 14.3391 13.3182 13.6609 14.1702 13.1567C15.0222 12.6525 15.9654 12.4003 17 12.4003C18.0346 12.4003 18.9778 12.6525 19.8298 13.1567C20.6818 13.6609 21.3599 14.3391 21.8642 15.1911C22.3684 16.043 22.6205 16.9907 22.6205 18.0339C22.6205 19.0772 22.3684 20.0248 21.8642 20.8768C21.3599 21.7288 20.6818 22.4069 19.8298 22.9111C18.9778 23.4154 18.0346 23.6675 17 23.6675Z"
						fill="#381600"
						style="fill:#381600;fill:color(display-p3 0.2200 0.0880 0.0000);fill-opacity:1;"
					/>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M32.7401 25.0237V10.3824H27.7948V7.52314H25.0852C24.7288 7.52314 24.4462 7.5014 24.2376 7.45793C24.0289 7.41446 23.842 7.33187 23.6768 7.21016C23.5116 7.08845 23.3204 6.91022 23.103 6.67549L22.0207 5.44967C21.6903 5.08453 21.3382 4.81937 20.9644 4.65419C20.5992 4.48031 20.095 4.39337 19.4516 4.39337H14.3658C13.7137 4.39337 13.2052 4.48031 12.84 4.65419C12.4749 4.81937 12.1228 5.08453 11.7837 5.44967L10.7013 6.67549C10.3971 7.01455 10.1189 7.24059 9.86674 7.35361C9.62331 7.46663 9.24513 7.52314 8.7322 7.52314H5.09385C3.82455 7.52314 2.86824 7.84481 2.2249 8.48815C1.58156 9.13149 1.25989 10.0748 1.25989 11.318V25.0237C1.25989 26.2756 1.58156 27.2233 2.2249 27.8666C2.86824 28.5099 3.82455 28.8316 5.09385 28.8316H28.9061C30.1754 28.8316 31.1317 28.5099 31.7751 27.8666C32.4184 27.2233 32.7401 26.2756 32.7401 25.0237ZM17 25.2193C17.9911 25.2193 18.917 25.0368 19.7777 24.6716C20.647 24.2978 21.4077 23.7849 22.0598 23.1328C22.7205 22.4721 23.2334 21.7071 23.5986 20.8377C23.9724 19.9683 24.1593 19.0337 24.1593 18.0339C24.1593 16.7038 23.8377 15.4953 23.1943 14.4086C22.5597 13.3219 21.699 12.4612 20.6123 11.8266C19.5342 11.1832 18.3301 10.8615 17 10.8615C16.0089 10.8615 15.0787 11.0485 14.2093 11.4223C13.3486 11.7874 12.5879 12.3004 11.9272 12.9611C11.2751 13.6131 10.7622 14.3738 10.3884 15.2432C10.0232 16.1039 9.84066 17.0341 9.84066 18.0339C9.84066 19.0337 10.0232 19.9683 10.3884 20.8377C10.7622 21.7071 11.2751 22.4721 11.9272 23.1328C12.5879 23.7849 13.3486 24.2978 14.2093 24.6716C15.0787 25.0368 16.0089 25.2193 17 25.2193ZM25.007 13.261C25.007 13.7218 25.1678 14.1043 25.4895 14.4086C25.8111 14.7129 26.1937 14.865 26.6371 14.865C27.0544 14.8737 27.4238 14.7216 27.7455 14.4086C28.0672 14.0869 28.228 13.7044 28.228 13.261C28.228 12.8437 28.0672 12.4742 27.7455 12.1526C27.4238 11.8309 27.0544 11.6701 26.6371 11.6701C26.1937 11.6701 25.8111 11.8309 25.4895 12.1526C25.1678 12.4742 25.007 12.8437 25.007 13.261Z"
						fill="#381600"
						style="fill:#381600;fill:color(display-p3 0.2200 0.0880 0.0000);fill-opacity:1;"
					/>
				</g>
				<defs>
					<filter
						id="filter0_d_44_401"
						x="0.259888"
						y="0.0192261"
						width="35.3319"
						height="28.8124"
						filterUnits="userSpaceOnUse"
						color-interpolation-filters="sRGB"
					>
						<feFlood flood-opacity="0" result="BackgroundImageFix" />
						<feColorMatrix
							in="SourceAlpha"
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>
						<feOffset dx="-1" />
						<feComposite in2="hardAlpha" operator="out" />
						<feColorMatrix
							type="matrix"
							values="0 0 0 0 1 0 0 0 0 0.498039 0 0 0 0 0.00392157 0 0 0 1 0"
						/>
						<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_44_401" />
						<feBlend
							mode="normal"
							in="SourceGraphic"
							in2="effect1_dropShadow_44_401"
							result="shape"
						/>
					</filter>
				</defs>
			</svg>
		</button>
	</div>
	<button class="p-5 pl-2">
		<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect
				y="0.831604"
				width="8.88889"
				height="8.88889"
				rx="1"
				fill="#381600"
				style="fill:#381600;fill:color(display-p3 0.2200 0.0880 0.0000);fill-opacity:1;"
			/>
			<rect
				x="11.1111"
				y="0.831604"
				width="8.88889"
				height="8.88889"
				rx="1"
				fill="#381600"
				style="fill:#381600;fill:color(display-p3 0.2200 0.0880 0.0000);fill-opacity:1;"
			/>
			<rect
				y="11.9427"
				width="8.88889"
				height="8.88889"
				rx="1"
				fill="#381600"
				style="fill:#381600;fill:color(display-p3 0.2200 0.0880 0.0000);fill-opacity:1;"
			/>
			<rect
				x="11.1111"
				y="11.9427"
				width="8.88889"
				height="8.88889"
				rx="1"
				fill="#381600"
				style="fill:#381600;fill:color(display-p3 0.2200 0.0880 0.0000);fill-opacity:1;"
			/>
		</svg>
	</button>
</nav>

<style lang="scss">
	nav {
		box-shadow:
			var(--tw-shadow),
			0px 4px 4px rgba(0, 0, 0, 0.25);
	}
	.bg-orange {
		/* Flame */
		background: linear-gradient(
			146.83deg,
			theme('colors.orange') 46.6%,
			theme('colors.yellow') 92.9%
		);
	}
	svg {
		path,
		rect {
			box-shadow: -1px 0px 0px theme('colors.dark-orange');
		}
	}
</style>
