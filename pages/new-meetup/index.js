import NewMeetupForm from "../../components/meetups/NewMeetupForm";
const NewMeetupPage = () => {
  const addMeetUpHandler = (enteredMeetUpdata) => {
    console.log(enteredMeetUpdata);
  };
  return <NewMeetupForm onAddMeetup={addMeetUpHandler} />;
};
export default NewMeetupPage;
