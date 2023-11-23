import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('with additional classes', () => {
        const expected = 'someClass class1 class2';
        expect(classNames('someClass', {}, ['class1', 'class2']))
            .toBe(expected);
    });

    test('with mods', () => {
        const expected = 'someClass hovered scrollable';
        expect(classNames('someClass', { hovered: true, scrollable: true }))
            .toBe(expected);
    });

    test('with additional classes and modes', () => {
        const expected = 'someClass class1 class2 hovered scrollable';
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: true },
            ['class1', 'class2'],
        ))
            .toBe(expected);
    });

    test('with additional classes and modes, one of which is false', () => {
        const expected = 'someClass class1 class2 hovered';
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: false },
            ['class1', 'class2'],
        ))
            .toBe(expected);
    });

    test('with additional classes and modes, one of which is undefined', () => {
        const expected = 'someClass class1 hovered';
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: undefined },
            ['class1', undefined],
        ))
            .toBe(expected);
    });
});
