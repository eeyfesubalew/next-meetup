import MeetupList from "../components/meetups/MeetupList";
const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/en/a/a1/Free_HQ_in_Paris.jpg",
    address: "Addis Ababa,Piassa",
    descreption: "this is the first meetup",
  },
  {
    id: "m2",
    title: "A second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/en/a/a1/Free_HQ_in_Paris.jpg",
    address: "Addis Ababa,Piassa",
    descreption: "this is the second meetup",
  },
];
const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

// export async function getServerSideProps() {
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
  return {
    props: { meetups: DUMMY_MEETUPS },
    revalidate: 10,
  };
}
export default HomePage;
