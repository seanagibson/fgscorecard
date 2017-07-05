import React from 'react';
import { Alert, Text, Modal, TouchableHighlight, View, FlatList } from 'react-native';

import PlayerSignup from './../signup/PlayerSignup';
import FinishGame from './../finish/FinishGame';
import CourseHeader from './CourseHeader';
import GamePlayer from './GamePlayer';

import {
  MonarchBay,
  Pruneridge,
  LasPositas,
  SantaTeresa
} from './../../courses/courses';
import { styles } from './../../styles/App';

export default class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentHole: null,
      players: [],
      totalPlayers: 0,
      showModal: false,
      course: MonarchBay,
      courseTitle: 'Monarch Bay',
    }

    this._playersignup = this._playersignup.bind(this);
    this._pickCourse = this._pickCourse.bind(this);
    this._incrementscore = this._incrementscore.bind(this);
    this._toggleModal = this._toggleModal.bind(this);
    this._quitgame = this._quitgame.bind(this);
  }

  _pickCourse(course) {
    switch(course) {
      case 'Monarch Bay':
        return MonarchBay;
      case 'Pruneridge':
        return Pruneridge;
      case 'Las Positas':
        return LasPositas;
      case 'Santa Teresa':
        return SantaTeresa;
      default:
        return MonarchBay;
    }
  }

  _playersignup(type, options) {
    let players;
    switch(type) {
      case 'add':
        this.setState({
          players: this.state.players.concat(options),
          totalPlayers: this.state.totalPlayers + 1,
        });
        break;
      case 'remove':
        players = this.state.players.slice(0, options.key)
                                    .concat(this.state.players
                                    .slice(options.key + 1));
        this.setState({ players });
        break;
      case 'finish':
        players = this.state.players.map((player) => {
          return Object.assign({}, player, {
            scores: player.scores.concat([{key: 0, score: 0}])
          });
        });
        let course = this._pickCourse(options);
        this.setState({
          currentHole: 1,
          courseTitle: options,
          players,
          course,
        });
        break;
      default:
        return this.state;
    }
  }

  _incrementscore(sign, playerkey) {
    const players = this.state.players.map((player) => {
      if (player.key !== playerkey) {
        return player;
      } else {
        const key = player.scores[this.state.currentHole - 1].key;
        const oldscore = player.scores[this.state.currentHole - 1].score;
        const newscore = (sign === '+') ?
          oldscore + 1 : oldscore - 1;
        return Object.assign({}, player, {
          scores: player.scores.slice(0, this.state.currentHole - 1)
                               .concat([{key, score: newscore}])
        });
      }
    });

    this.setState({
      players,
    });
  }

  _finishhole() {
    const players = this.state.players.map((player) => {
      return Object.assign({}, player, {
        scores: player.scores.concat([{key: this.state.currentHole, score: 0}]),
      });
    });
    this.setState({
      currentHole: this.state.currentHole + 1,
      players,
    });
  }

  _toggleModal() {
    this.setState({
      showModal: !this.state.showModal,
    });
  }

  _quitgame() {
    this.setState({
      currentHole: null,
      players: [],
      totalPlayers: 0,
      course: MonarchBay,
      courseTitle: 'Monarch Bay',
      showModal: !this.state.showModal,
    });
  };

  render() {
    if (this.state.currentHole === null) {
      return <PlayerSignup players={this.state.players}
                           playersignup={this._playersignup}
                           totalPlayers={this.state.totalPlayers} />
    }

    const currentHole = this.state.currentHole;
    const coursehalf = (currentHole > 9) ?
      this.state.course.back : this.state.course.front;

    if (this.state.course.holes[this.state.currentHole - 1] === undefined) {
      const game = {
        players: this.state.players,
        courseTitle: this.state.courseTitle,
      };
      return <FinishGame players={this.state.players}
                         currentHole={currentHole}
                       />
    }

    /* TODO: remove course related and just use this.state.course */
    return (
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <Text style={styles.coursetitle}>{this.state.course.title}</Text>
          <CourseHeader totalYardage={this.state.course.total.totalYardage}
                        totalPar={this.state.course.total.par}
                        totalHoles={this.state.course.holes.length}
                        currentHole={currentHole}
                        coursehalf={coursehalf}
                        currentHoleDetails={this.state.course.holes[this.state.currentHole - 1]} />
        </View>
        <TouchableHighlight onPress={() => { this._finishhole(); }}>
          <Text style={styles.finishholebutton}>Finish Hole</Text>
        </TouchableHighlight>
        <View style={{flex: 2}}>
          <FlatList data={this.state.players}
                    renderItem={(player) => <GamePlayer player={player}
                                                        currentHole={this.state.currentHole}
                                                        incrementscore={this._incrementscore} />} />
        </View>
        <TouchableHighlight onPress={() => { this._toggleModal(); }}>
          <Text style={styles.resumebutton}>Quit Game</Text>
        </TouchableHighlight>
        <Modal animationType={"slide"}
               transparent={false}
               visible={this.state.showModal}>
               <View style={{
                 flex: 1,
                 justifyContent: 'center',
                 alignItems: 'center',
                 backgroundColor: 'grey'
               }} >
                 <TouchableHighlight onPress={() => { this._toggleModal(); }}>
                   <Text style={styles.newbutton}>Resume</Text>
                 </TouchableHighlight>
                 <TouchableHighlight onPress={() => { this._quitgame(); }}>
                   <Text style={styles.quitbutton}>Quit</Text>
                 </TouchableHighlight>
               </View>
        </Modal>
      </View>
    );
  }
};
