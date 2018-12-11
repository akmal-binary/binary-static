import { expect }                               from 'chai';
import React                                    from 'react';
import { isBarrierSupported, barriersToString } from '../barriers';

describe('Barriers', () => {
    describe('isBarrierSupported', () => {
        it('should return false when barrier is not in CONTRACT_SHADES', () => {
            expect(isBarrierSupported('SomeThinMadeUp')).to.eql(false);
        });
        it('should return true when barrier is in CONTRACT_SHADES', () => {
            expect(isBarrierSupported('CALL')).to.eql(true);
        });
    });

    describe('barriersToString', () => {
        it('should convert non-zero barriers which do not have +/- to string consisting of them without +/- while is_relative is false', () => {
            expect(barriersToString(false, [10, 15])).to.deep.eql(['10','15']);
        });
        it('should convert values without +/- and zero to string consisting of them without +/- while is_relative is false', () => {
            expect(barriersToString(false, [0, 15])).to.deep.eql(['0','15']);
        });
        it('should convert barriers which have +/- to string consisting of them without +/- while is_relative is false', () => {
            expect(barriersToString(false, [+11, 15])).to.deep.eql(['11','15']);
        });
        it('should convert barriers which have +/- to string consisting of them with +/- while is_relative is true', () => {
            expect(barriersToString(true, [+11, +15])).to.deep.eql(['+11','+15']);
        });
    });
});