/** @flow */


// * imports
import Realm from 'realm';


// * OrgNode
// ** functions
// ** object

class OrgNode extends Realm.Object {

}

// ** schema
OrgNode.schema = {
  name: 'OrgNode',
  primaryKey: 'id',
  properties: {

    // Internal
    id: 'string',
    file: 'OrgFile',
    isChanged: { type: 'bool', default: false },
    isAdded: { type: 'bool', default: false },
    rawContent: 'string',
    rawHeadline: 'string',

    // Position
    level: 'int', // horizontal position - is not used to crc check
    position: 'int', // vertical position - is not used to crc check
    originalPosition: 'int', // used for sync - dufeult = position

    // Tree props
    parent: 'OrgNode?',
    children: { type: 'linkingObjects', objectType: 'OrgNode', property: 'parent'},

    //  Org data
    headline: 'string',
    content: 'string',
    tags: 'OrgTag[]',
    todo: 'string?',
    timestamps: 'OrgTimestamp[]',
    closed: 'date?',
    priority: 'string?',
    drawers: 'string?' // json string
  }
}

export default OrgNode.schema