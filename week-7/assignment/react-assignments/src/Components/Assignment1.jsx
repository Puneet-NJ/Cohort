import { useRecoilValue } from "recoil";
import { convertToK, profileAtom } from "../store/atoms/profile";

function Assignment1() {
	const { name, age, city, imageLink } = useRecoilValue(profileAtom);

	const {
		modifiedFollowers: followers,
		modifiedLikes: likes,
		modifiedPhotos: photos,
	} = useRecoilValue(convertToK);

	return (
		<div>
			<img src={imageLink} alt="dp" />
			<div>{name}</div>
			<div>{age}</div>
			<div>{city}</div>
			<hr />

			<div>followers: {followers}</div>
			<div>likes: {likes}</div>
			<div>photos: {photos}</div>
		</div>
	);
}

export default Assignment1;
