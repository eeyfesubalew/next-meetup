import MeetupDetail from "../../components/meetups/MeetupDetail";
const MeetupDetails = () => {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/en/a/a1/Free_HQ_in_Paris.jpg"
      title="A first meetup"
      address="Addis ababa piasa"
      description="This is the first meet up"
    />
  );
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [{ params: { meetupId: "m1" } }, { params: { meetupId: "m1" } }],
  };
}
export function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  console.log(meetupId);

  return {
    props: {
      meetupData: {
        id: meetupId,
        image:
          "https://upload.wikimedia.org/wikipedia/en/a/a1/Free_HQ_in_Paris.jpg",
        title: "A first meetup",
        address: "Addis ababa piasa",
        description: "This is the first meet up",
      },
    },
  };
}
export default MeetupDetails;
