/*jshint esversion: 6*/

const chai = require('chai');
const expect = chai.expect;
const bowling = require('../bowling.js');

describe('bowling', () => {
  it('should be a function', () => {
    expect(bowling).to.be.a('function');
  });
  it('should take in an array as a parameter', () => {
    expect(bowling(12)).to.equal(false);
    expect(bowling('12')).to.equal(false);
    expect(bowling({key: 12, key1: 14})).to.equal(false);
    expect(bowling(null)).to.equal(false);
    expect(bowling(undefined)).to.equal(false);
  });
  it('should have a paramater with array indices', () => {
    expect(bowling(['10', [4, 2], [10], [1, 8], [10], [4, 7], [10], [3, 6], [4, 6], [1, 8]])).to.equal(false);
    expect(bowling([[10], [3, 6], [4, 6], null, [10], [4, 7], [10], [3, 6], [4, 6], [1, 8]])).to.equal(false);
    expect(bowling([[10], [4, 2], [10], [1, 8], [10], {key: 10}, [10], [3, 6], [4, 6], [1, 8]])).to.equal(false);
    expect(bowling([[10], [3, 6], [4, 6], [10], [10], undefined, [10], [3, 6], [4, 6], [1, 8]])).to.equal(false);
    expect(bowling([[10], 10, [4, 6], [10], [10], [3, 6], [10], [3, 6], [4, 6], [1, 8]])).to.equal(false);
  });
  it('should have a parameter full of numbers', () => {
    expect(bowling([[10], [10], [4, 6], [10], [10], [3, 6], ['10'], [5, 2], [4, 2], [6, 3]])).to.equal(false);
    expect(bowling([[10], [10], [4, 6], [10], [10], [3, [4, 5]], [10], [5, 2], [4, 2], [6, 3]])).to.equal(false);
  });
  it('should only take a scoresheet with 10 frames in it', () => {
    expect(bowling([[10], [3, 6], [4, 6]])).to.equal(false);
    expect(bowling([[10], [3, 6], [4, 6], [1, 8], [10], [4, 7]])).to.equal(false);
    expect(bowling([[1, 4], [4, 5], [10], [8, 1], [6, 4], [8, 0],
    [1, 4], [4, 5], [10], [8, 1], [6, 4], [8, 0]])).to.equal(false);
  });
  it('should have 9 frames with a max of 2 scores, and the last with a max of 3', () => {
    expect(bowling([[10], [10], [4, 6, 8], [10], [10], [3, 6], [10], [5, 2], [4, 2], [6, 2]])).to.equal(false);
    expect(bowling([[10], [10], [4, 6], [10], [10], [3, 6], [10], [5, 2], [4, 4], [6, 3, 5, 4]])).to.equal(false);
  });
  it('the sum of pins knocked down in each frame should be less than 10', () => {
    expect(bowling([[10], [10], [4, 6], [10], [10], [3, 6], [10], [5, 6], [4, 8], [6, 8]])).to.equal(false);
  });
  it('should return a score of 0 if the scoresheet is full of zeros', () => {
    expect(bowling([[0], [0], [0], [0], [0], [0], [0], [0], [0], [0]])).to.equal(0);
  });
  it('should return a score of 300 if all scores are 10', () => {
    expect(bowling([[10], [10], [10], [10], [10], [10], [10], [10], [10], [10, 10]])).to.equal(300);
  });
});