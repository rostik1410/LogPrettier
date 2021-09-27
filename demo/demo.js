import { logger } from '../index.js';

logger.info('Info test');
logger.debug('Dubug test');
logger.warn('Warn test');
logger.error('Error tets');

logger.init({
	infoBackgroundColor: '#FF5733',
	infoTitle: '🥸 Info title',
});

logger.info('Show changes');

logger.init({
	infoBackgroundColor: 'rgba(132, 154, 134, 1)',
});

logger.info('Show changes');
