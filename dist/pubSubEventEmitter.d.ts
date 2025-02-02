/**
 * EventEmitter wrapper for processing incoming Pub/Sub API events
 * while keeping track of the topic name and the volume of events requested/received.
 * @alias PubSubEventEmitter
 * @global
 */
export default class PubSubEventEmitter extends EventEmitter {
    /**
     * Create a new EventEmitter for Pub/Sub API events
     * @param {string} topicName
     * @param {number} requestedEventCount
     * @protected
     */
    protected constructor();
    emit(eventName: any, args: any): boolean;
    /**
     * Returns the number of events that were requested during the subscription
     * @returns {number} the number of events that were requested
     */
    getRequestedEventCount(): number;
    /**
     * Returns the number of events that were received since the subscription
     * @returns {number} the number of events that were received
     */
    getReceivedEventCount(): number;
    /**
     * Returns the topic name for this subscription
     * @returns {string} the topic name
     */
    getTopicName(): string;
    /**
     * Sets the number of events that were requested during the subscription
     */
    setRequestedEventCount(requestedEventCount: any): void;
    #private;
}
import { EventEmitter } from 'events';
//# sourceMappingURL=pubSubEventEmitter.d.ts.map