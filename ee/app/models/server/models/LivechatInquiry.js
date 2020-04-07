import { LivechatInquiry } from '../../../../../app/models/server/models/LivechatInquiry';

LivechatInquiry.prototype.setPriorityByRoomId = function(rid, priority) {
	return this.update({ rid }, {
		$set: {
			'omnichannel.priority': {
				_id: priority._id,
				name: priority.name,
				dueTimeInMinutes: parseInt(priority.dueTimeInMinutes),
			},
		},
	});
};

LivechatInquiry.prototype.unsetPriorityByRoomId = function(rid) {
	return this.update({ rid }, {
		$unset: {
			'omnichannel.priority': 1,
		},
	});
};

LivechatInquiry.prototype.updatePriorityDataByPriorityId = function(priorityId, priorityData) {
	return this.update({
		'omnichannel.priority._id': priorityId,
	},
	{
		$set: {
			'omnichannel.priority.name': priorityData.name,
			'omnichannel.priority.dueTimeInMinutes': parseInt(priorityData.dueTimeInMinutes),
		},
	});
};

LivechatInquiry.prototype.unsetPriorityByPriorityId = function(priorityId) {
	return this.update({
		'omnichannel.priority._id': priorityId,
	},
	{
		$unset: {
			'omnichannel.priority': 1,
		},
	});
};

export default LivechatInquiry;