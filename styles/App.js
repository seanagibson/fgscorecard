import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // HOME
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  apptitle: {
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'Baskerville',
    fontSize: 42,
    marginBottom: 10,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonscontainer: {
    alignItems: 'center',
    margin: 20,
  },
  newbutton: {
    backgroundColor: '#009e0a',
    fontWeight: 'bold',
    color: 'white',
    height: 50,
    width: 250,
    textAlign: 'center',
    lineHeight: 50,
    marginBottom: 20,
  },
  resumebutton: {
    backgroundColor: '#009e0a',
    fontWeight: 'bold',
    color: 'white',
    height: 50,
    width: 250,
    textAlign: 'center',
    lineHeight: 50,
    marginBottom: 20,
  },
  quitbutton: {
    backgroundColor: '#cc2828',
    fontWeight: 'bold',
    color: 'white',
    height: 50,
    width: 250,
    textAlign: 'center',
    lineHeight: 50,
    marginBottom: 20,
  },
  picker: {
    width: 250,
    justifyContent: 'center'
  },
  pickcourse: {
    marginTop: 20,
    width: 250,
    alignItems: 'flex-start',
    fontWeight: 'bold',
    backgroundColor: '#2b6cdb',
    color: 'white',
  },
  statisticsbutton: {
    backgroundColor: '#2b6cdb',
    fontWeight: 'bold',
    color: 'white',
    height: 50,
    width: 250,
    textAlign: 'center',
    lineHeight: 50,
    marginBottom: 15,
  },
  // PLAYER SIGNUP
  signupInput: {
    backgroundColor: 'white',
    marginBottom: 10,
    marginLeft: 125,
    height: 50,
    width: 250,
  },
  playerrow: {
    flexDirection: 'row',
    margin: 5,
  },
  playername: {
    width: 300,
    height: 50,
    backgroundColor: 'white',
    fontSize: 20,
    lineHeight: 50,
    textAlign: 'center',
  },
  removebutton: {
    backgroundColor: 'black',
    fontWeight: 'bold',
    color: 'white',
    height: 50,
    width: 50,
    textAlign: 'center',
    lineHeight: 50,
  },
  // GAME
  coursetitle: {
    fontWeight: 'bold',
    marginTop: 20,
    fontSize: 40,
  },
  coursedetailscontainer: {
    flexDirection: 'row',
    flex: 1,
    marginTop: 20,
  },
  detailscolumn: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center'
  },
  courseheader: {
    fontWeight: 'bold',
    marginTop: 5,
    fontSize: 20,
  },
  courseyardpar: {
    fontSize: 15,
  },
  // player in game display
  playerdisplayrowtop: {
    flexDirection: 'row',
    flex: 1,
    margin: 5,
  },
  gameplayername: {
    width: 150,
    height: 50,
    backgroundColor: 'white',
    fontSize: 20,
    lineHeight: 50,
    textAlign: 'center',
  },
  scoredisplayrow1: {
    flexDirection: 'row',
    flex: 1,
  },
  scoredisplayrow2: {
    flexDirection: 'row',
    flex: 2,
  },
  scorebox: {
    fontWeight: 'bold',
    height: 30,
    width: 30,
    textAlign: 'center',
    lineHeight: 30,
    borderColor: 'black',
    borderWidth: 1,
  },
  // Stats Pages
  statscontainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statsapptitle: {
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'Baskerville',
    fontSize: 35,
    marginTop: 20,
    marginBottom: 5,
    height: 50,
  },
  statscoursetitle: {
    fontWeight: 'bold',
    margin: 15,
    fontSize: 18,
    height: 30,
    lineHeight: 40,
  },
  statsdetailslink: {
    height: 30,
    width: 110,
    backgroundColor: '#2b6cdb',
    marginLeft: 30,
  },
  statsdetailsbutton: {
    marginLeft: 25,
    fontWeight: 'bold',
    height: 30,
    width: 60,
    textAlign: 'center',
    lineHeight: 30,
    color: 'white',
  },
  statsplayercontainer: {
    alignItems: 'flex-start',
    marginLeft: 5,
    marginRight: 5,
  },
  statsname: {
    fontWeight: 'bold',
    fontSize: 15,
  },
});
