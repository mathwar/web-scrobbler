export {};

Connector.playerSelector = '#webradio-player';

Connector.artistSelector = '.artist';

Connector.trackSelector = '.title';

Connector.trackArtSelector = '.coverimg';

Connector.pauseButtonSelector = '.nrj-webradio-icon-pause2';

Connector.isPlaying = () => {
	return Util.hasElementClass('.play-btn', 'is-playing');
};
